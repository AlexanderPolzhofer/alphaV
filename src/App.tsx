import React from 'react';
import { useFetch } from './hooks/useFetch';
import { Route, Routes } from 'react-router-dom';
import { News } from './pages/News/News';
import { Home } from './pages/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import './App.css';

function App() {
  const url = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=${
    import.meta.env.VITE_API_KEY
  }`;
  const { loading, data } = useFetch(url);

  console.log(data);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<News data={data} />} path={'/news'} />
        <Route element={<Home />} path={'*'} />
      </Routes>
    </div>
  );
}

export default App;
