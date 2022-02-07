import { useEffect, useState } from "react";
import styles from "./dday_count_down.module.css";

const DdayCountDown = ({ registration, period }) => {
  const [theme, setTheme] = useState("base");

  const dday = new Date(registration);
  const yyyy = dday.getFullYear();
  const mm = dday.getMonth() + 1 + parseInt(period);
  const dd = dday.getDate();

  let deadline = `${yyyy}-${mm}-${dd}`;

  const [days, setDays] = useState(0);

  const leading0 = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      setDays(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);

    leading0(days) === 0 ? setTheme("alert") : setTheme("base");
    return () => getTimeUntil(deadline);
  }, [deadline, days]);

  return (
    <div>
      <div className="Clock-days">
        D
        <span className={`${styles.card} ${getStyles(theme)}`}>
          -{leading0(days)}
        </span>
      </div>
    </div>
  );
};

function getStyles(theme) {
  switch (theme) {
    case "base":
      return styles.base;
    case "alert":
      return styles.alert;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}

export default DdayCountDown;
