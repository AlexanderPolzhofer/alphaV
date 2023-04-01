import React from 'react';
import { NewsProps } from '../../types/types';
import { Card } from './../../components/Card/Card';
import './News.css';

export const News: React.FC<NewsProps> = ({ data, handleTickerItemsClick }) => {
  return (
    <div className="news-content">
      {data?.feed.map((data, idx) => (
        <div className="card" key={idx}>
          <Card data={data} handleTickerItemsClick={handleTickerItemsClick} />
        </div>
      ))}
    </div>
  );
};
