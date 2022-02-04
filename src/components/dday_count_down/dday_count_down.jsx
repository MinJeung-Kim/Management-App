const DdayCountDown = ({ registration, period }) => {
  const month = period.charAt(0);

  const date = new Date(registration);
  const dday = date.setMonth(date.getMonth() + month);

  const today = new Date(registration).getTime();
  const gap = dday - today;
  const day = Math.ceil(gap / (1000 * 60 * 60 * 24));

  console.log("D-DAY까지 " + day + "일 ");

  return <p>D-DAY {day}</p>;
};
export default DdayCountDown;
