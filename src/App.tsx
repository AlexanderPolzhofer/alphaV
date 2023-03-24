import React from 'react';
import './App.css';
import { Card } from './components/Card/Card';
import { useFetch } from './hooks/useFetch';

function App() {
  const url = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=${
    import.meta.env.VITE_API_KEY
  }`;
  const { loading, data } = useFetch(url);

  return (
    <div className="App">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridTemplateRows: 'auto',
          gap: '50px',
        }}
      >
        {data &&
          data.feed.map((data) => (
            <div className="card">
              <Card data={data} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
