import React from "react";
import Button from "../button/button";
import styles from "./card_edit_form.module.css";

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
  const { name, age, registration, phone, message, period, theme, fileName } =
    card;

  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }

    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onSubmit = () => {
    deleteCard(card);
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        defaultValue={name}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="number"
        name="age"
        min={1}
        max={100}
        defaultValue={age}
        onChange={onChange}
      />
      <select className={styles.select} name="period" defaultValue={period}>
        <option value="1개월">1개월</option>
        <option value="3개월">3개월</option>
        <option value="6개월">6개월</option>
      </select>
      <select className={styles.select} name="theme" defaultValue={theme}>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="date"
        name="registration"
        defaultValue={registration}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="phone"
        required
        pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}"
        maxLength="11"
        defaultValue={phone}
        onChange={onChange}
      />
      <textarea
        className={styles.textarea}
        name="message"
        defaultValue={message}
        onChange={onChange}
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
