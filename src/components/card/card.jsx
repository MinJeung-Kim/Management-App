import React, { memo } from "react";
import Button from "../../common/button/button";
import Input from "../../common/input/input";
import { input, select } from "../../common/input/labelData";
import Select from "../../common/select/select";
import styles from "./card.module.css";

const DEFAULT_IMAGE = "/images/default_logo.png";

const Card = memo(({ FileInput, card, updateCard, deleteCard, openDetail }) => {
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
    fnCloseDetail();
  };

  const fnCloseDetail = () => {
    openDetail(false);
  };

  // card에 있는 모든 정보 전달
  const {
    name,
    gender,
    age,
    job,
    phone,
    discount,
    registration,
    message,
    period,
    fileURL,
    fileName,
  } = card;
  const url = fileURL || DEFAULT_IMAGE;
  return (
    <>
      <div className={styles.close}>
        <span>Edit Profile</span>
        <i className="far fa-times-circle" onClick={fnCloseDetail}></i>
      </div>

      <li className={styles.profile}>
        <div className={styles.imagLeft}>
          <img className={styles.avatar} src={url} alt="profile" />
          <div className={styles.avatarinfo}>
            <input
              className={styles.name}
              type="text"
              name="name"
              defaultValue={name}
              onChange={onChange}
            />
            <div className={styles.subinfo}>
              <input
                className={styles.age}
                type="number"
                name="age"
                defaultValue={age}
                onChange={onChange}
              />
              /
              <input
                className={styles.gender}
                type="text"
                name="gender"
                defaultValue={gender}
              />
            </div>
          </div>
        </div>
        <div className={styles.imagRight}>
          <i className="fas fa-cog">
            <FileInput name={fileName} onFileChange={onFileChange} />
          </i>
        </div>
      </li>
      <hr className={styles.horizontal} />

      <li className={styles.card}>
        <div className={styles.formbox}>
          {input.map((item) => (
            <Input
              label={item.label}
              type={item.type}
              name={item.name}
              value={card[item.name]}
              onChange={onChange}
            />
          ))}

          {select.map((item) => (
            <Select
              label={item.label}
              name={item.name}
              value={item.value}
              onChange={onChange}
            />
          ))}
        </div>

        <div className={styles.formbox}>
          <div className={styles.formgroup}>
            <label>자기소개 </label>
            <textarea
              className={styles.input}
              name="message"
              defaultValue={message}
              onChange={onChange}
            ></textarea>
          </div>
        </div>
      </li>
      <Button name="Delete" onClick={onSubmit} />
    </>
  );
});

export default Card;
