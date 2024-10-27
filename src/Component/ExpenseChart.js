import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

// Register required components
Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const ExpenseChart = ({ expenses }) => {
  // Group expenses by category
  const groupedExpenses = expenses.reduce((acc, expense) => {
    if (!acc[expense.category]) {
      acc[expense.category] = 0;
    }
    acc[expense.category] += expense.amount;
    return acc;
  }, {});

  // Prepare data for the bar chart
  const data = {
    labels: Object.keys(groupedExpenses),
    datasets: [
      {
        label: 'Expenses',
        data: Object.values(groupedExpenses),
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Set a color for the bars
        borderColor: 'rgba(75, 192, 192, 1)', // Set a border color for the bars
        borderWidth: 1, // Set border width
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#333', // Set Y-axis tick color for visibility
        },
      },
      x: {
        ticks: {
          color: '#333', // Set X-axis tick color for visibility
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#333', // Set legend label color for visibility
          font: {
            size: 14, // Increase legend font size
          },
        },
      },
      tooltip: {
        titleColor: '#333', // Set tooltip title color
        bodyColor: '#333', // Set tooltip body color
      },
    },
    elements: {
      bar: {
        borderWidth: 2, // Set the border width of bars
      },
    },
  };

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-semibold mb-2">Expense Distribution by Category</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ExpenseChart;
