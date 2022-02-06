import React, { memo } from "react";
import Button from "../button/button";
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
  };

  const fnCloseDetail = () => {
    openDetail(false);
  };

  // card에 있는 모든 정보 전달
  const {
    name,
    age,
    job,
    phone,
    discount,
    registration,
    message,
    period,
    theme,
    fileURL,
    fileName,
  } = card;
  const url = fileURL || DEFAULT_IMAGE;
  return (
    <>
      <div className={styles.close}>
        <i className="far fa-times-circle" onClick={fnCloseDetail}></i>
      </div>

      <li className={styles.profile}>
        <div className={styles.imagLeft}>
          <img className={styles.avatar} src={url} alt="profile" />
          {/* <i className="fas fa-cog">
            <FileInput name={fileName} onFileChange={onFileChange} />
          </i> */}
        </div>
        <div className={styles.imagRight}>
          <input
            className={styles.name}
            type="text"
            name="name"
            defaultValue={name}
            onChange={onChange}
          />
          <input
            className={styles.age}
            type="number"
            name="age"
            defaultValue={age}
            onChange={onChange}
          />
        </div>
      </li>
      <li className={`${styles.card} ${getStyles(theme)}`}>
        <div className={styles.info}>
          <p className={styles.job}>
            직업 :
            <input
              type="text"
              name="job"
              defaultValue={job}
              onChange={onChange}
            />
          </p>
          <p className={styles.discount}>
            구분 :
            <select
              className={styles.select}
              name="discount"
              defaultValue={discount}
              onChange={onChange}
            >
              <option value="일반">일반</option>
              <option value="할인">할인</option>
            </select>
          </p>
          <p className={styles.registration}>
            등록일 :
            <input
              type="date"
              name="registration"
              defaultValue={registration}
              onChange={onChange}
            />
          </p>
          <p className={styles.period}>
            등록기간 :
            <select
              className={styles.select}
              name="period"
              defaultValue={period}
              onChange={onChange}
            >
              <option value="1개월">1개월</option>
              <option value="3개월">3개월</option>
              <option value="6개월">6개월</option>
            </select>
          </p>
          <p className={styles.phone}>
            전화번호 :
            <input
              type="text"
              name="phone"
              required
              pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}"
              maxLength="11"
              defaultValue={phone
                .replace(/[^0-9]/, "")
                .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)}
              onChange={onChange}
            />
          </p>
        </div>
        <div>
          <p className={styles.message}>
            자기소개 :
            <textarea
              className={styles.textarea}
              name="message"
              defaultValue={message}
              onChange={onChange}
            ></textarea>
          </p>
        </div>
      </li>
      <Button name="Delete" onClick={onSubmit} />
    </>
  );
});

function getStyles(theme) {
  switch (theme) {
    case "dark":
      return styles.dark;
    case "light":
      return styles.light;
    case "colorful":
      return styles.colorful;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}

export default Card;
