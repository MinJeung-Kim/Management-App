import Chart from "../../common/chart/chart";
import Header from "../header/header";
import styles from "./dashboard.module.css";

const Dashboard = ({ onLogout }) => {
  return (
    <section className={styles.dashboard}>
      <Header onLogout={onLogout} />
      <div className={styles.chart}>
        <Chart />
      </div>
    </section>
  );
};

export default Dashboard;
