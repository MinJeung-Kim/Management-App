import React, { memo, useRef, useState } from "react";
import Button from "../button/button";
import styles from "./card_add_form.module.css";

const CardAddForm = memo(({ FileInput, onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const ageRef = useRef();
  const periodRef = useRef();
  const themeRef = useRef();
  const registrationRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onFileChange = (file) => {
    console.log(file);
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(), //uuid
      name: nameRef.current.value || "",
      age: parseInt(ageRef.current.value) || "",
      period: periodRef.current.value,
      theme: themeRef.current.value,
      registration: registrationRef.current.value || "",
      phone: phoneRef.current.value || "",
      message: messageRef.current.value || "",
      fileName: file.fileName || "",
      fileURL: file.fileURL || "",
    };

    console.log(card.age);

    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
    onAdd(card);
  };

  return (
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
      <select
        ref={themeRef}
        className={styles.select}
        name="theme"
        placeholder="Theme"
      >
        <option placeholder="light">light</option>
        <option placeholder="dark">dark</option>
        <option placeholder="colorful">colorful</option>
      </select>
      <input
        ref={registrationRef}
        className={styles.input}
        type="date"
        name="registration"
        placeholder="registration"
      />
      <input
        ref={phoneRef}
        className={styles.input}
        type="text"
        name="phone"
        required
        pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}"
        maxLength="11"
        placeholder="예) 010-1234-5678"
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name="message"
        placeholder="message"
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput naem={file.fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
});

export default CardAddForm;
