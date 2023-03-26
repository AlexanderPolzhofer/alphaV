import React from 'react';
import { FeedData } from '../../types/types';
import { createDate } from '../../util/createDate';
import './Card.css';

interface CardProps {
  data: FeedData;
}

export const Card: React.FC<CardProps> = ({ data }) => {
  const { banner_image, summary, title, url, time_published } = data;

  return (
    <div className="card-container">
      <div className="image-wrapper">
        <img width="100%" src={`${banner_image}`} />
      </div>
      <div>
        <div className="link-date-wrapper">
          <p>{createDate(time_published)}</p>
          <a href={`${url}`} target="_blank">
            <img src="/src/assets/readMore.svg" className="icon" />
          </a>
        </div>
        <span>
          <b>
            {title.trim().length < 89 ? `${title}` : title.substring(0, 55)} ...
          </b>
        </span>
      </div>
      <div>
        <p>
          {`${summary}
        `.substring(0, 100)}{' '}
          ...
        </p>
      </div>
    </div>
  );
};
