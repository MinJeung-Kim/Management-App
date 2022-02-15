import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./side_bar.module.css";

const SideBar = () => {
  let { id } = useParams();
  console.log(id);
  return (
    <aside>
      <ul className={styles.sidebar}>
        <li className={styles.dashboard}>
          <Link to="/dashboard">
            <i className="fas fa-chart-line"></i>Dashboard
          </Link>
        </li>
        <li className={styles.tables}>
          <Link to="/maker">
            <i className="fas fa-user"></i>Tables
          </Link>
        </li>
        <li className={styles.billing}>
          <Link to="/billing">
            <i className="far fa-credit-card"></i>Billing
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
