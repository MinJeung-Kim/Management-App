import styles from "./side_bar.module.css";

const SideBar = () => {
  return (
    <aside>
      <ul className={styles.sidebar}>
        <li className={styles.dashboard}>
          <i className="fas fa-chart-line"></i>Dashboard
        </li>
        <li className={styles.tables}>
          <i className="fas fa-user"></i>Tables
        </li>
        <li className={styles.billing}>
          <i className="far fa-credit-card"></i>Billing
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
