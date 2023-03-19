import React from 'react';
import axios from 'axios';

export const useFetch = (url: string) => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState();

  const loadData = React.useCallback(async () => {
    setLoading(true);
    const response = await axios.get(url);
    setData(response.data);
    setLoading(false);
  }, [url]);

  React.useEffect(() => {
    loadData();
  }, [url, loadData]);

  return { loading, data };
};
