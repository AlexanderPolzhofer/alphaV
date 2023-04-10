import React from 'react';
import { Chart } from 'chart.js';

export const ComboTestChart = () => {
  const chartRef = React.useRef<HTMLCanvasElement>(null);

  const createChart = async (ctx: CanvasRenderingContext2D) => {
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [
          {
            type: 'bar',
            label: 'Bar Dataset',
            data: [10, 20, 30, 40],
            backgroundColor: 'rgb(255, 99, 132)',
            order: 2,
          },
          {
            type: 'bar',
            label: 'Bar Dataset',
            data: [20, 50, 35, 40],
            backgroundColor: 'rgb(255, 99, 132)',
            order: 3,
          },
          {
            type: 'bar',
            label: 'Bar Dataset',
            data: [30, 50, 40, 10],
            backgroundColor: 'rgb(255, 99, 132)',
            order: 4,
          },
          {
            type: 'line',
            label: 'Line Dataset',
            data: [25, 35, 5, 50],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.5,
            order: 1,
          },
        ],
        labels: ['January', 'February', 'March', 'April'],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    return chart;
  };

  React.useEffect(() => {
    if (!chartRef.current) return;
    const ctx = chartRef.current.getContext('2d');
    ctx !== null && createChart(ctx);
  }, []);

  return (
    <canvas
      id="myChart"
      ref={chartRef}
      style={{ backgroundColor: '#FFFFFF' }}
    />
  );
};
