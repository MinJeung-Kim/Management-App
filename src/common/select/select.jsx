import React, { memo } from "react";
import styles from "../input/input.module.css";

const Select = memo(({ name, value, onChange }) => {
  return (
    <select
      className={styles.input}
      name={name}
      defaultValue={name}
      placeholder={name}
      onChange={onChange}
    >
      {value.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
});
export default Select;
