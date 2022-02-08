import React, { memo } from "react";
import styles from "./input.module.css";

const fnCheckCharCode = (event) => {
  console.log(event.target);
  const regExp = /[^0-9a-zA-Z]/g;
  const ele = event.target;
  if (regExp.test(ele.value)) {
    ele.value = ele.value.replace(regExp, "");
  }
};

const Input = memo(({ label, type, name, value, onChange }) => (
  <div className={styles.formgroup}>
    <label>{label}</label>
    <input
      className={styles.input}
      type={type}
      name={name}
      defaultValue={value}
      onChange={onChange}
      placeholder={name === "phone" ? "하이픈(-)없이 입력" : name}
      maxLength={name === "phone" && "11"}
      onKeyUp={name === "phone" && fnCheckCharCode}
    />
  </div>
));

export default Input;
