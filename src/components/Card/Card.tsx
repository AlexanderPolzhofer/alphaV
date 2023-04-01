import React from 'react';
import { Link } from 'react-router-dom';
import { CardProps } from '../../types/types';
import { createDate } from '../../util/createDate';
import './Card.css';

export const Card: React.FC<CardProps> = ({ data, handleTickerItemsClick }) => {
  const {
    banner_image,
    overall_sentiment_label,
    overall_sentiment_score,
    title,
    url,
    time_published,
    ticker_sentiment,
  } = data;

  return (
    <div className="card-container">
      <div className="image-wrapper">
        <img width="100%" src={`${banner_image ?? '/src/assets/react.svg'}`} />
      </div>
      <div>
        <div className="link-text-wrapper">
          <p className="date">{createDate(time_published)}</p>
          <a href={`${url}`} target="_blank">
            <img src="/src/assets/read-more.svg" className="icon" />
          </a>
        </div>
        <b>
          <span className="title">
            {title.split(' ').length > 5
              ? `${title.substring(0, 34)} ...`
              : title}
          </span>
        </b>
      </div>
      <div>
        <p>
          <b>Sentiment:</b> {` ${overall_sentiment_label}`}
        </p>
        <hr />
        <p>
          <b>Score:</b> {` ${overall_sentiment_score}`}
        </p>
        <hr />
        <p className="link-text-wrapper">
          <span>
            <b>Ticker Items:</b>
            {` ${ticker_sentiment.length}`}
          </span>
          <Link
            to={'/news/ticker-sentiment'}
            onClick={() => handleTickerItemsClick(ticker_sentiment)}
          >
            <img src="/src/assets/arrow-right.svg" className="icon" />
          </Link>
        </p>
      </div>
    </div>
  );
};
