import React, { useState } from 'react';
import BarChart from '../../components/Charts/Bar/BarChart';
import { useFetch } from '../../hooks/useFetch';
import { TYPE, WeeklyData } from '../../types/types';

export const Home = () => {
  const [data, setData] = useState<WeeklyData | {}>();
  const url = import.meta.env.VITE_MONTHLY_DATA;

  const { barData } = useFetch(url, TYPE.WEEKLY_DATA);

  console.log(barData);

  return (
    <BarChart
      barData={[
        120.62, 111.16, 125.6, 84.26, 99.23, 92.89, 90.44, 82.47, 107.99, 81.33,
        121.08, 127.96, 164.05, 193.42, 211.38, 182.21, 160.45, 154.98, 143.74,
        141.28, 144.35, 133.22, 130.15, 144.68, 134.5, 130.5,
      ]}
    />
  );
};
