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
    fnCloseDetail();
  };

  const fnCloseDetail = () => {
    openDetail(false);
  };

  const fnCheckCharCode = (event) => {
    const regExp = /[^0-9a-zA-Z]/g;
    const ele = event.target;
    if (regExp.test(ele.value)) {
      ele.value = ele.value.replace(regExp, "");
    }
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
          <i className="fas fa-cog">
            <FileInput name={fileName} onFileChange={onFileChange} />
          </i>
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
      <li className={styles.card}>
        <div className={styles.info}>
          <div className={styles.formgroup}>
            전화번호 :
            <input
              type="text"
              name="phone"
              defaultValue={phone}
              maxLength="11"
              onKeyUp={fnCheckCharCode}
              onChange={onChange}
            />
          </div>
          <div className={styles.formgroup}>
            직업 :
            <input
              type="text"
              name="job"
              defaultValue={job}
              onChange={onChange}
            />
          </div>
          <div className={styles.formgroup}>
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
          </div>
          <div className={styles.formgroup}>
            등록일 :
            <input
              type="date"
              name="registration"
              defaultValue={registration}
              onChange={onChange}
            />
          </div>
          <div className={styles.formgroup}>
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
          </div>
        </div>
        <div>
          <div className={styles.formgroup}>
            자기소개 :
            <textarea
              className={styles.textarea}
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
