import React, { memo, useRef, useState } from "react";
import Button from "../button/button";
import styles from "./card_add_form.module.css";

const CardAddForm = memo(
  ({ FileInput, onAdd, payPrice, sale, setSale, openEditor }) => {
    const formRef = useRef();
    const nameRef = useRef();
    const ageRef = useRef();
    const jobRef = useRef();
    const phoneRef = useRef();
    const discountRef = useRef();
    const periodRef = useRef();
    const registrationRef = useRef();
    const messageRef = useRef();
    const [file, setFile] = useState({ fileName: null, fileURL: null });

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

    const onChangeDiscount = () => {
      discountRef.current.value === "할인" ? setSale(1000) : setSale(0);
    };

    const onSubmit = (event) => {
      event.preventDefault();
      const card = {
        id: Date.now(), //uuid
        name: nameRef.current.value || "",
        age: parseInt(ageRef.current.value) || "",
        job: jobRef.current.value || "",
        phone: phoneRef.current.value || "",
        discount: discountRef.current.value || "",
        period: periodRef.current.value,
        registration: registrationRef.current.value || "",
        message: messageRef.current.value || "",
        fileName: file.fileName || "",
        fileURL: file.fileURL || "",
      };

      formRef.current.reset();
      setFile({ fileName: null, fileURL: null });
      onAdd(card);
    };

    const fnCloseDetail = () => {
      openEditor(false);
    };

    return (
      <div className={styles.cardAddForm}>
        <div className={styles.close}>
          <i className="far fa-times-circle" onClick={fnCloseDetail}></i>
        </div>
        <form ref={formRef} className={styles.form}>
          <input
            ref={nameRef}
            className={styles.input}
            type="text"
            name="name"
            placeholder="Nmae"
          />
          <input
            ref={ageRef}
            className={styles.input}
            type="number"
            name="age"
            min={1}
            max={100}
            placeholder="age"
          />
          <input
            ref={phoneRef}
            className={styles.input}
            type="text"
            name="phone"
            required
            pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}"
            maxLength="11"
            placeholder="하이픈(-)없이 입력"
          />
          <input
            ref={jobRef}
            className={styles.input}
            type="text"
            name="job"
            placeholder="job"
          />
          <select
            ref={discountRef}
            className={styles.discount}
            name="discount"
            placeholder="Discount"
            onChange={onChangeDiscount}
          >
            <option value="일반">일반</option>
            <option value="할인">할인</option>
          </select>
          <input
            ref={registrationRef}
            className={styles.input}
            type="date"
            name="registration"
            defaultValue={today}
            placeholder="registration"
          />
          <select
            ref={periodRef}
            className={styles.select}
            name="period"
            placeholder="Period"
          >
            <option value="1개월">1개월</option>
            <option value="3개월">3개월</option>
            <option value="6개월">6개월</option>
          </select>
          <textarea
            ref={messageRef}
            className={styles.textarea}
            name="message"
            placeholder="message"
          ></textarea>
          <p className={styles.input}>
            결제금액 : {new Intl.NumberFormat().format(payPrice)}
          </p>
          <p className={styles.input}>
            할인금액 : {new Intl.NumberFormat().format(sale)}
          </p>
          <p className={styles.input}>
            총 결제금액 :{new Intl.NumberFormat().format(payPrice - sale)}
          </p>
          <div className={styles.fileInput}>
            <FileInput naem={file.fileName} onFileChange={onFileChange} />
          </div>
          <Button name="Add" onClick={onSubmit} />
        </form>
      </div>
    );
  }
);

export default CardAddForm;
