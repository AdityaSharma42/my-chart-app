import React from 'react';
import ChartComponent from './ChartComponent';

const BubbleChart = ({ data }) => {
  const bubbleChartData = {
    datasets: [
      {
        label: 'Sales, Expenses, and Profits',
        data: data.expenses.map((expense, index) => ({
          x: expense,
          y: data.profits[index],
          r: data.sales[index] / 10,
        })),
       
      },
    ],
  };

  const bubbleChartOptions = {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <ChartComponent type="bubble" data={bubbleChartData} options={bubbleChartOptions} />;
};

export default BubbleChart;