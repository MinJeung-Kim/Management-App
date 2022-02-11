import React, { memo, useRef, useState } from "react";
import Button from "../../common/button/button";
import Input from "../../common/input/input";
import Select from "../../common/select/select";
import { select } from "../../common/input/labelData";
import styles from "./card_add_form.module.css";

const CardAddForm = memo(
  ({ FileInput, onAdd, payPrice, sale, setSale, openEditor }) => {
    const formRef = useRef();
    const [formItems, setFormItems] = useState();
    const [gender, setGender] = useState("여자");
    const [message, setMessage] = useState("");
    const [file, setFile] = useState({ fileName: null, fileURL: null });

    const fnCloseDetail = () => {
      openEditor(false);
    };

    const getDate = () => {
      const date = new Date();
      const today =
        date.getFullYear() +
        "-" +
        (date.getMonth() + 1).toString().padStart(2, "0") +
        "-" +
        date.getDate().toString().padStart(2, "0");
      return today;
    };

    const onChange = (e) => {
      const nextState = { ...formItems };
      nextState[e.target.name] = e.target.value;
      setFormItems(nextState);

      if (e.target.name === "discount") onDiscountChange(e.target.value);
    };

    const onFileChange = (file) => {
      setFile({
        fileName: file.name,
        fileURL: file.url,
      });
    };

    const onGenderChange = (event) => {
      setGender(event.target.value);
    };

    const onDiscountChange = (value) => {
      value === "할인" ? setSale(1000) : setSale(0);
    };

    const onMessageChange = (event) => {
      setMessage(event.target.value);
    };

    const onSubmit = (event) => {
      event.preventDefault();
      const { name, age, job, discount, period, registration, phone } =
        formItems;
      const card = {
        id: Date.now(), //uuid
        name: name,
        gender: gender,
        age: age || 0,
        job: job || "기타",
        phone: phone
          .replace(/[^0-9]/, "")
          .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`),
        discount: discount || "일반",
        period: period || "1개월",
        registration: registration || getDate(),
        message: message,
        fileName: file.fileName,
        fileURL: file.fileURL,
      };

      // 필수 입력 체크
      if (card.name === "") {
        return alert("이름을 입력하세요");
      } else if (card.phone === "") {
        return alert("전화번호를 입력하세요");
      }

      formRef.current.reset();

      setFile({ fileName: null, fileURL: null });

      onAdd(card);
    };

    const input = [
      { label: "이름", name: "name", type: "text" },
      { label: "나이", name: "age", type: "numbe" },
      { label: "직업", name: "job", type: "text" },
      { label: "등록일", name: "registration", type: "date" },
      { label: "전화번호", name: "phone", type: "text" },
    ];

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
              {input.map((title, i) => (
                <div key={i} className={styles.formgroup}>
                  <label>{title.label}</label>
                  <Input
                    className={styles.input}
                    type={title.type}
                    name={title.name}
                    value={title.name === "registration" ? getDate() : ""}
                    onChange={onChange}
                  />
                </div>
              ))}
              <div className={styles.formgroup}>
                <label>성별 </label>
                <div className={styles.labelbox}>
                  <label className={styles.gender}>
                    <input
                      className={styles.input}
                      type="radio"
                      value="여자"
                      name="gender"
                      checked={gender === "여자"}
                      onChange={onGenderChange}
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
                      onChange={onGenderChange}
                    />
                    남자
                  </label>
                </div>
              </div>
              {select.map((title, i) => (
                <div key={i} className={styles.formgroup}>
                  <label>{title.label}</label>
                  <Select
                    className={styles.input}
                    name={title.name}
                    value={title.value}
                    onChange={onChange}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.formgroup}>
            <label>자기소개 :</label>
            <textarea
              className={styles.input}
              name="message"
              onChange={onMessageChange}
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
