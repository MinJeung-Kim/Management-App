import { useEffect, useState } from "react";

const DdayCountDown = ({ registration, period }) => {
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
    setInterval(() => getTimeUntil(deadline), 10000);

    return () => getTimeUntil(deadline);
  }, [deadline]);

  console.log(leading0(days));
  return (
    <div>
      <div className="Clock-days">D-{leading0(days)} </div>
    </div>
  );
};

export default DdayCountDown;
