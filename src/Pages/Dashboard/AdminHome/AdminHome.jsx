import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from "recharts";
import { Wallet, Users, ShoppingBag, Package } from "lucide-react";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const pieData = [
    { name: "Users", value: stats.users || 0 },
    { name: "Menu Items", value: stats.menuItems || 0 },
    { name: "Orders", value: stats.orders || 0 },
    { name: "Revenue", value: stats.revenue || 0 },
  ];

  const barData = [
    { name: "Users", count: stats.users || 0 },
    { name: "Menu", count: stats.menuItems || 0 },
    { name: "Orders", count: stats.orders || 0 },
    { name: "Revenue", count: stats.revenue || 0 },
  ];

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
          <h3 className="text-xl font-semibold mb-4">Statistics Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="count" fill="#8884d8" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4">Data Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
