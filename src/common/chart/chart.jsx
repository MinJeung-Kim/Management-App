import { AreaChart, Area, XAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Chart = () => {
  return (
    <AreaChart
      width={500}
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
          <stop offset="5%" stopColor="#EE5A24" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#EE5A24" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
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
  );
};

export default Chart;
