import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Jan",
    pv: 2400,
  },
  {
    name: "Feb",
    pv: 1398,
  },
  {
    name: "Mar",
    pv: 9800,
  },
  {
    name: "Apr",
    pv: 3908,
  },
  {
    name: "May",
    pv: 4800,
  },
  {
    name: "Jun",
    pv: 3800,
  },
  {
    name: "Jul",
    pv: 4300,
  },
  {
    name: "Aug",
    pv: 4300,
  },
  {
    name: "Sep",
    pv: 4300,
  },
  {
    name: "Oct",
    pv: 4300,
  },
  {
    name: "Nov",
    pv: 4300,
  },
  {
    name: "Dec",
    pv: 4300,
  },
  // Aug Sep Oct Nov Dec
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        width={300}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#EE5A24" stopOpacity={0.5} />
            <stop offset="70%" stopColor="#EE5A24" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" stroke="true" />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#DDD" />

        <Area
          type="monotone"
          dataKey="pv"
          stroke="#EE5A24"
          strokeWidth={3}
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
