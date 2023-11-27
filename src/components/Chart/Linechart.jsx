import React from 'react';
import { Line } from 'react-chartjs-2';

const Linechart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [1000, 5000, 6500, 2500, 7000],
        fill: false, // To make it a line chart without filling the area below the line
        borderColor: 'rgb(75, 192, 192)', // Line color
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Line Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default Linechart;
