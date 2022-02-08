import React, { memo } from "react";
import styles from "./input.module.css";

const Input = memo(({ label, type, name, value, onChange }) => (
  <div className={styles.formgroup}>
    <label>{label}</label>
    <input
      className={styles.input}
      type={type}
      name={name}
      defaultValue={value}
      placeholder={name}
      onChange={onChange}
    />
  </div>
));

export default Input;
