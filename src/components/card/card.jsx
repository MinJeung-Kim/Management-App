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
                defaultValue={"여자"}
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
          <div className={styles.formgroup}>
            <label>전화번호 </label>
            <input
              className={styles.input}
              type="text"
              name="phone"
              maxLength="11"
              defaultValue={phone}
              placeholder="하이픈(-)없이 입력"
              onKeyUp={fnCheckCharCode}
              onChange={onChange}
            />
          </div>
          <div className={styles.formgroup}>
            <label>직업</label>
            <input
              className={styles.input}
              type="text"
              name="job"
              defaultValue={job}
              placeholder="Job"
              onChange={onChange}
            />
          </div>
          <div className={styles.formgroup}>
            <label> 등록일 </label>
            <input
              className={styles.input}
              type="date"
              name="registration"
              defaultValue={registration}
              placeholder="registration"
              onChange={onChange}
            />
          </div>
          <div className={styles.formgroup}>
            <label>구분</label>
            <select
              className={styles.input}
              name="discount"
              defaultValue={discount}
              placeholder="Discount"
              onChange={onChange}
            >
              <option value="일반">일반</option>
              <option value="할인">할인</option>
            </select>
          </div>
          <div className={styles.formgroup}>
            <label>등록기간 </label>
            <select
              className={styles.input}
              name="period"
              defaultValue={period}
              placeholder="Period"
              onChange={onChange}
            >
              <option value="1개월">1개월</option>
              <option value="3개월">3개월</option>
              <option value="6개월">6개월</option>
            </select>
          </div>
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
