import React from 'react'
import ChartComponent from './ChartComponent';

const BarChart = ({ data }) => {
    if (!data || !data.months || !data.sales) { //checking if data is available
        return <div>No data available for the Bar Chart</div>;
    }

    const barChartData = { //creating the data structure for the chart
      labels: data.months,
      datasets: [
        {
          label: 'Monthly Sales',
          data: data.sales,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
    const barChartOptions = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
      return <ChartComponent type="bar" data={barChartData} options={barChartOptions} />;
    };

    export default BarChart;