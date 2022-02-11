import Chart from "../../common/chart/chart";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <section className={styles.dashboard}>
      <div className={styles.chart}>
        <Chart />
      </div>
    </section>
  );
};

export default Dashboard;
