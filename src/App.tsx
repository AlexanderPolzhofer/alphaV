import React from 'react';
import './App.css';
import { Card } from './components/Card/Card';
import { useFetch } from './hooks/useFetch';

function App() {
  const url = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=${
    import.meta.env.VITE_API_KEY
  }`;
  const { loading, data } = useFetch(url);

  console.log(data);

  return (
    <div className="App">
      <div className="app-content">
        {data &&
          data.feed.map((data, idx) => (
            <div className="card" key={idx}>
              <Card data={data} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
