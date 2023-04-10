import React from 'react';
import axios from 'axios';
import { CardNewsData, WeeklyData, Vwap, TYPE } from '../types/types';

export const useFetch = (url: string, type: TYPE) => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<CardNewsData>();
  const [barData, setBarData] = React.useState<WeeklyData>();
  const [vwap, setVwap] = React.useState<Vwap>();

  const loadData = React.useCallback(async () => {
    setLoading(true);
    const response = await axios.get(url);
    if (type === TYPE.CARD_NEWS_DATA) {
      setData(response.data);
    } else if (type === TYPE.WEEKLY_DATA) {
      setBarData(response.data);
    } else if (type === TYPE.VWAP) {
      setVwap(response.data);
    }
    setLoading(false);
  }, [url]);

  React.useEffect(() => {
    loadData();
  }, [url]);

  return { loading, data, barData, vwap };
};
