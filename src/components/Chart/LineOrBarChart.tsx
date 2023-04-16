import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

interface StockData {
  date: string;
  close: number;
}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill: boolean;
    borderColor: string;
  }[];
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement
);

interface LineOrBarChartProps {
  type: 'BarChart' | 'LineChart';
}

export const LineOrBarChart: React.FC<LineOrBarChartProps> = ({ type }) => {
  const [stockData, setStockData] = useState<StockData[]>([]);
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [
      {
        label: 'Stock Prices',
        data: [],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.alphavantage.co/query', {
          params: {
            function: 'TIME_SERIES_WEEKLY_ADJUSTED',
            symbol: 'AAPL',
            apikey: 'YOUR_API_KEY', // Replace with your actual API key
          },
        });
        const data = response.data['Weekly Adjusted Time Series'];
        const stockData: StockData[] = [];
        const chartData: ChartData = {
          labels: [],
          datasets: [
            {
              label: 'Stock Prices',
              data: [],
              fill: true,
              borderColor: 'rgb(75, 192, 192)',
            },
          ],
        };
        Object.keys(!!data).forEach((date) => {
          const closePrice = parseFloat(data[date]['4. close']);
          if (!isNaN(closePrice)) {
            stockData.push({ date, close: closePrice });
            chartData.labels.push(date);
            chartData.datasets[0].data.push(closePrice);
          }
        });
        setStockData(stockData);
        setChartData(chartData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {type === 'LineChart' ? (
        <Line data={chartData} />
      ) : (
        <Bar data={chartData} />
      )}
    </div>
  );
};
