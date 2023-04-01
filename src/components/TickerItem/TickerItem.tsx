import React from 'react';
import { TickerSentimentData } from '../../types/types';
import './TickerItem.css';

export interface TickerItemProps {
  tickerItem: TickerSentimentData;
}

export const TickerItem: React.FC<TickerItemProps> = ({ tickerItem }) => {
  const {
    ticker,
    ticker_sentiment_label,
    relevance_score,
    ticker_sentiment_score,
  } = tickerItem;
  return (
    <div className="ticker-item-container">
      <div>{ticker}</div>
      <div>Label: {ticker_sentiment_label}</div>
      <div>Score: {ticker_sentiment_score}</div>
      <div>Relevance Score: {relevance_score}</div>
    </div>
  );
};
