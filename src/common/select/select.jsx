import React, { memo } from "react";
import styles from "../input/input.module.css";

const Select = memo(({ label, name, value, onChange }) => {
  return (
    <div className={styles.formgroup}>
      <label>{label} </label>
      <select
        className={styles.input}
        name={name}
        defaultValue={name}
        placeholder={name}
        onChange={onChange}
      >
        {value.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
});
export default Select;
