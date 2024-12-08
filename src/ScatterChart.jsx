import React from 'react';
import ChartComponent from './ChartComponent';

const ScatterChart = ({ data }) => {
    if (!data || !data.expenses || !data.profits) {
        return <div>No data available for the Scatter Chart</div>;
    }
  const scatterChartData = {
    datasets: [
      {
        label: 'Expenses vs Profits',
        data: data.expenses.map((expense, index) => ({
          x: expense,
          y: data.profits[index],
        })),
        
      },
    ],
  };

  const scatterChartOptions = {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <ChartComponent type="scatter" data={scatterChartData} options={scatterChartOptions} />;
};

export default ScatterChart;