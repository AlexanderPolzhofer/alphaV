import React from 'react';
import './App.css';
import { useFetch } from './hooks/useFetch';

function App() {
  const url = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=${
    import.meta.env.VITE_API_KEY
  }`;
  const { loading, data } = useFetch(url);

  console.log(data);

  return <div className="App"></div>;
}

export default App;
