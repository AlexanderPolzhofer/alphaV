import React from 'react';
import { CardNewsData } from '../../types/types';
import { Card } from './../../components/Card/Card';
import './News.css';

interface NewsProps {
  data?: CardNewsData;
}

export const News: React.FC<NewsProps> = ({ data }) => {
  return (
    <div className="news-content">
      {data?.feed.map((data, idx) => (
        <div className="card" key={idx}>
          <Card data={data} />
        </div>
      ))}
    </div>
  );
};
