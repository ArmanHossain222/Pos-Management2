import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Example dashboard stats
  const stats = {
    totalSales: 4500,
    totalCustomers: 320,
    totalProducts: 150,
    dailyTransactions: 25,
  };

  // Example data for transactions (Replace this with real data)
  const transactionData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: "Daily Transactions",
        data: [12, 19, 15, 17, 23, 20, 25], // Replace with dynamic transaction data
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const transactionOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Daily Transactions Overview",
      },
    },
  };

  return (
    <div className="p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p className="text-gray-600 mb-6">Welcome to the ERP POS system! Here is a quick overview:</p>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {/* Total Sales */}
        <div className="bg-blue-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Total Sales</h3>
          <p className="text-2xl font-bold text-blue-600">
            ${stats.totalSales.toLocaleString()}
          </p>
        </div>
        {/* Total Customers */}
        <div className="bg-green-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Total Customers</h3>
          <p className="text-2xl font-bold text-green-600">
            {stats.totalCustomers}
          </p>
        </div>
        {/* Total Products */}
        <div className="bg-yellow-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Total Products</h3>
          <p className="text-2xl font-bold text-yellow-600">
            {stats.totalProducts}
          </p>
        </div>
        {/* Daily Transactions */}
        <div className="bg-red-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Daily Transactions</h3>
          <p className="text-2xl font-bold text-red-600">
            {stats.dailyTransactions}
          </p>
        </div>
      </div>

      {/* Transaction Chart Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-10">
        <h2 className="text-xl font-bold mb-4">Transaction Chart</h2>
        <Bar data={transactionData} options={transactionOptions} />
      </div>

      {/* Additional Information or Navigation */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Quick Links</h2>
        <ul className="list-disc pl-6">
          <li>
            <a href="/inventory" className="text-blue-500 hover:underline">
              Manage Inventory
            </a>
          </li>
          <li>
            <a href="/sales" className="text-blue-500 hover:underline">
              View Sales Reports
            </a>
          </li>
          <li>
            <a href="/settings" className="text-blue-500 hover:underline">
              System Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
