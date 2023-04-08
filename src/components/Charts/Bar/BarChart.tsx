import { useEffect, useRef } from 'react';
import Chart, { ChartConfiguration } from 'chart.js/auto';

interface Props {
  barData: number[];
}

const BarChart = ({ barData }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    chartRef.current?.destroy();
    chartRef.current = new Chart(context, getChartConfig(barData));

    return () => {
      chartRef.current?.destroy();
    };
  }, [barData, canvasRef]);

  const getChartConfig = (data: number[]): ChartConfiguration => ({
    type: 'bar',
    data: {
      labels: data.map((_, i) => (i + 1).toString()),
      datasets: [
        {
          label: 'Bar Chart',
          data,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  return <canvas ref={canvasRef} />;
};

export default BarChart;
