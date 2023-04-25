import React from 'react';
import { useFetch } from './hooks/useFetch';
import { Route, Routes } from 'react-router-dom';
import { News } from './pages/News/News';
import { Home } from './pages/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { TYPE, TickerSentimentData } from './types/types';
import { TickerItems } from './pages/TickerItems/TickerItems';
import './App.css';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

const App: React.FC = () => {
  const [tickerItems, setTickerItems] = React.useState<{
    title: string;
    tickerData: TickerSentimentData[];
  }>({ title: '', tickerData: [] });
  const url = import.meta.env.VITE_NEWS_URL;
  const weeklyData = import.meta.env.VITE_WEEKLY_DATA;
  const { data } = useFetch(url, TYPE.CARD_NEWS_DATA);
  const { barData } = useFetch(weeklyData, TYPE.WEEKLY_DATA);

  const handleTickerItemsClick = (
    title: string,
    tickerData: TickerSentimentData[]
  ) => {
    setTickerItems({ title, tickerData });
  };

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            element={
              <News
                data={data}
                handleTickerItemsClick={handleTickerItemsClick}
              />
            }
            path={'/news'}
          />
          <Route
            element={<TickerItems tickerItems={tickerItems} />}
            path={'/news/ticker-sentiment'}
          />
          <Route element={<Home />} path={'*'} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
};

export default App;
