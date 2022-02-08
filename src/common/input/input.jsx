import styles from "./input.module.css";

const Input = ({ label, type, name }) => {
  return (
    <div className={styles.formgroup}>
      <label>{label}</label>
      <input
        className={styles.input}
        type={type}
        name={name}
        placeholder={name}
      />
    </div>
  );
};

export default Input;
