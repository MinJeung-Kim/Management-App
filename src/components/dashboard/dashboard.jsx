import Chart from "../../common/chart/chart";
import Slide from "../../common/slide/slide";
import Header from "../header/header";
import styles from "./dashboard.module.css";

const Dashboard = ({ onLogout }) => {
  return (
    <section className={styles.dashboard}>
      <Header onLogout={onLogout} />
      <div className={styles.content}>
        <div className={styles.chart}>
          <Chart />
        </div>
        <Slide />
      </div>
    </section>
  );
};

export default Dashboard;
