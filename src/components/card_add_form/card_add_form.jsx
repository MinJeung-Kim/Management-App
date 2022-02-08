import React, { memo, useEffect, useRef, useState } from "react";
import Button from "../button/button";
import styles from "./card_add_form.module.css";

const CardAddForm = memo(
  ({ FileInput, onAdd, payPrice, sale, setSale, openEditor }) => {
    const formRef = useRef();
    const nameRef = useRef();
    const ageRef = useRef();
    const jobRef = useRef();
    const discountRef = useRef();
    const periodRef = useRef();
    const registrationRef = useRef();
    const messageRef = useRef();
    const [file, setFile] = useState({ fileName: null, fileURL: null });
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("여자");

    useEffect(() => {
      if (phone.length === 10) {
        setPhone(phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
      }
      if (phone.length === 13) {
        setPhone(
          phone.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
        );
      }
    }, [phone]);

    const date = new Date();
    const today =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      date.getDate().toString().padStart(2, "0");

    const onFileChange = (file) => {
      console.log(file);
      setFile({
        fileName: file.name,
        fileURL: file.url,
      });
    };

    const handlePress = (e) => {
      const regex = /^[0-9\b -]{0,13}$/;
      if (regex.test(e.target.value)) {
        setPhone(e.target.value);
      }
    };

    const onChangeDiscount = () => {
      discountRef.current.value === "할인" ? setSale(1000) : setSale(0);
    };

    const onSubmit = (event) => {
      event.preventDefault();

      const card = {
        id: Date.now(), //uuid
        name: nameRef.current.value || "",
        gender: gender || "",
        age: parseInt(ageRef.current.value) || "-",
        job: jobRef.current.value || "기타",
        phone: phone || "",
        discount: discountRef.current.value || "",
        period: periodRef.current.value,
        registration: registrationRef.current.value,
        message: messageRef.current.value || "",
        fileName: file.fileName || "",
        fileURL: file.fileURL || "",
      };

      if (card.name === "") {
        return alert("이름을 입력하세요");
      } else if (card.phone === "") {
        return alert("전화번호를 입력하세요");
      }
      formRef.current.reset();
      setFile({ fileName: null, fileURL: null });
      onAdd(card);
    };

    const fnCloseDetail = () => {
      openEditor(false);
    };

    const fnCheckCharCode = (event) => {
      const regExp = /[^0-9a-zA-Z]/g;
      const ele = event.target;
      if (regExp.test(ele.value)) {
        ele.value = ele.value.replace(regExp, "");
      }
    };

    const fnChangeGender = (event) => {
      setGender(event.target.value);
    };

    return (
      <div className={styles.cardAddForm}>
        <div className={styles.close}>
          <i className="far fa-times-circle" onClick={fnCloseDetail}></i>
        </div>
        <h1 className={styles.title}>회원 등록</h1>
        <hr className={styles.horizontal} />
        <form ref={formRef} className={styles.form}>
          <div className={styles.section}>
            <div className={styles.formbox}>
              <div className={styles.formgroup}>
                <label>*이름</label>
                <input
                  ref={nameRef}
                  className={styles.input}
                  type="text"
                  name="name"
                  placeholder="Nmae"
                />
              </div>
              <div className={styles.formgroup}>
                <label>나이</label>
                <input
                  ref={ageRef}
                  className={styles.input}
                  type="number"
                  name="age"
                  min={1}
                  max={100}
                  placeholder="Age"
                />
              </div>
              <div className={styles.formgroup}>
                <label>직업</label>
                <input
                  ref={jobRef}
                  className={styles.input}
                  type="text"
                  name="job"
                  placeholder="Job"
                />
              </div>
              <div className={styles.formgroup}>
                <label>*등록일 </label>
                <input
                  ref={registrationRef}
                  className={styles.input}
                  type="date"
                  name="registration"
                  defaultValue={today}
                  placeholder="registration"
                />
              </div>
            </div>

            <div className={styles.formbox}>
              <div className={styles.formgroup}>
                <label>*성별 </label>
                <div className={styles.labelbox}>
                  <label className={styles.gender}>
                    <input
                      className={styles.input}
                      type="radio"
                      value="여자"
                      name="gender"
                      checked={gender === "여자"}
                      onChange={fnChangeGender}
                    />
                    여자
                  </label>

                  <label className={styles.gender}>
                    <input
                      className={styles.input}
                      type="radio"
                      value="남자"
                      name="gender"
                      checked={gender === "남자"}
                      onChange={fnChangeGender}
                    />
                    남자
                  </label>
                </div>
              </div>

              <div className={styles.formgroup}>
                <label>*전화번호 </label>
                <input
                  className={styles.input}
                  type="text"
                  name="phone"
                  maxLength="11"
                  placeholder="하이픈(-)없이 입력"
                  onKeyUp={fnCheckCharCode}
                  onChange={handlePress}
                />
              </div>
              <div className={styles.formgroup}>
                <label>*구분</label>
                <select
                  ref={discountRef}
                  className={styles.input}
                  name="discount"
                  placeholder="Discount"
                  onChange={onChangeDiscount}
                >
                  <option value="일반">일반</option>
                  <option value="할인">할인</option>
                </select>
              </div>

              <div className={styles.formgroup}>
                <label>*등록기간 </label>
                <select
                  ref={periodRef}
                  className={styles.input}
                  name="period"
                  placeholder="Period"
                >
                  <option value="1개월">1개월</option>
                  <option value="3개월">3개월</option>
                  <option value="6개월">6개월</option>
                </select>
              </div>
            </div>
          </div>

          <div className={styles.formgroup}>
            <label>자기소개 :</label>
            <textarea
              ref={messageRef}
              className={styles.input}
              name="message"
              placeholder="Message"
            ></textarea>
          </div>

          <div className={styles.pricegroup}>
            <p className={styles.price}>
              결제금액 : {new Intl.NumberFormat().format(payPrice)}
            </p>
            <p className={styles.price}>
              할인금액 : {new Intl.NumberFormat().format(sale)}
            </p>
            <p className={styles.price}>
              총 결제금액 :{new Intl.NumberFormat().format(payPrice - sale)}
            </p>
          </div>
          <div className={styles.buttonbox}>
            <div className={styles.fileInput}>
              <FileInput naem={file.fileName} onFileChange={onFileChange} />
            </div>
            <Button name="Add" onClick={onSubmit} />
          </div>
        </form>
      </div>
    );
  }
);

export default CardAddForm;
