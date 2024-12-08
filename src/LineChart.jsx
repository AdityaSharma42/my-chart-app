import React from 'react';
import ChartComponent from './ChartComponent';

const LineChart = ({ data }) => {
    if (!data || !data.months || !data.profits) {
        return <div>No data available for the Line Chart</div>;
    }
  const lineChartData = {
    labels: data.months,
    datasets: [
      {
        label: 'Monthly Profits',
        data: data.profits,
        borderColor: 'blue',
      },
    ],
  };

  const lineChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <ChartComponent type="line" data={lineChartData} options={lineChartOptions} />;
};

export default LineChart;
