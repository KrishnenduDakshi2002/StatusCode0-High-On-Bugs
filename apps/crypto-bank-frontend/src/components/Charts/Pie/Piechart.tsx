import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Borrowed Money', 'Loan Pool'],
  datasets: [
    {
      label: '# of Votes',
      data: [25, 75],
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
      borderWidth: 1,
    },
  ],
};

export default function Piechart() {
  return (
    <Doughnut
      data={data}
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
}
