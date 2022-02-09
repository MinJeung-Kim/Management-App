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

const Input = memo(({ className, type, name, value, ref, onChange }) => (
  <input
    className={className}
    type={type}
    name={name}
    ref={ref}
    defaultValue={value}
    onChange={onChange}
    placeholder={name === "phone" ? "하이픈(-)없이 입력" : name}
    maxLength={name === "phone" && "11"}
    onKeyUp={name === "phone" && fnCheckCharCode}
    min={name === "age" && 1}
    max={name === "age" && 100}
  />
));

export default Input;
