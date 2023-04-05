import React from 'react';
import { TickerItemProps } from '../../types/types';
import './TickerItem.css';

export const TickerItem: React.FC<TickerItemProps> = ({ tickerItem }) => {
  const {
    ticker,
    ticker_sentiment_label,
    relevance_score,
    ticker_sentiment_score,
  } = tickerItem;
  return (
    <div className="ticker-item-container">
      <div className="ticker">{ticker}</div>
      <div className="center-text">{ticker_sentiment_label}</div>
      <div className="score">
        <span className="score-label">Relevance Score:</span> {relevance_score}
        <span className="score-label">Sentiment Score:</span>{' '}
        {ticker_sentiment_score}
      </div>
    </div>
  );
};
