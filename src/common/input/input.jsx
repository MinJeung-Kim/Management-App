import React, { memo } from "react";
// import styles from "./input.module.css";

const fnCheckCharCode = (event) => {
  const regExp = /[^0-9]/g;
  const ele = event.target;
  if (regExp.test(ele.value)) {
    ele.value = ele.value.replace(regExp, "");
  }
};

const Input = memo(({ className, type, name, value, onChange }) => (
  <input
    className={className}
    type={type}
    name={name}
    defaultValue={value}
    onChange={onChange}
    placeholder={name === "phone" ? "하이픈(-)없이 입력" : ""}
    maxLength={name === "phone" ? 11 : undefined}
    onKeyUp={name === "phone" ? fnCheckCharCode : undefined}
    min={name === "age" ? 1 : undefined}
    max={name === "age" ? 100 : undefined}
  />
));

export default Input;
