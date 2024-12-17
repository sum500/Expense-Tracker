import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import "./ExpenseChart.css";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ExpenseChart = ({ expenses }) => {
  const labels = expenses.map((expense) => expense.title);
  const data = expenses.map((expense) => expense.amount);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Expenses",
        data,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Expense Chart',
      },
    },
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Title'
        }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Amount'
        }
      }
    }
  };

  return (
    <div className="expense-chart" style={{ height: '400px' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ExpenseChart;
