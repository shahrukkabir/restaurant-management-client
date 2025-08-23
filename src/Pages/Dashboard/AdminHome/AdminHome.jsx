import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import { Wallet, Users, ShoppingBag, Package } from "lucide-react";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const BAR_COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // stats
  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  // order-stats for charts
  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });

  // custom shape for bar chart
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
        Z`;
  };
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // pie chart labels
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        fontSize={12}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = chartData.map((data) => ({
    name: data.category,
    value: data.revenue,
  }));

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-semibold">
        Hi, Welcome {user?.displayName ? user.displayName : "Back!"}
      </h2>

      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-purple-400 to-purple-600 text-white shadow-xl rounded-2xl p-6 flex flex-col items-center">
          <Wallet className="w-10 h-10 mb-2" />
          <p className="text-2xl font-bold">${stats.revenue || 0}</p>
          <p className="text-lg">Revenue</p>
        </div>

        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-xl rounded-2xl p-6 flex flex-col items-center">
          <Users className="w-10 h-10 mb-2" />
          <p className="text-2xl font-bold">{stats.users || 0}</p>
          <p className="text-lg">Customers</p>
        </div>

        <div className="bg-gradient-to-r from-pink-400 to-pink-600 text-white shadow-xl rounded-2xl p-6 flex flex-col items-center">
          <ShoppingBag className="w-10 h-10 mb-2" />
          <p className="text-2xl font-bold">{stats.menuItems || 0}</p>
          <p className="text-lg">Products</p>
        </div>

        <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-xl rounded-2xl p-6 flex flex-col items-center">
          <Package className="w-10 h-10 mb-2" />
          <p className="text-2xl font-bold">{stats.orders || 0}</p>
          <p className="text-lg">Orders</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-xl text-violet-500 font-semibold mb-4">Orders by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Bar
                dataKey="quantity"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={BAR_COLORS[index % BAR_COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-xl text-violet-500 font-semibold mb-4">Revenue Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
