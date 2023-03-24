import React from 'react';
import { createDate } from '../../util/createDate';

interface CardProps {
  data: { [key: string]: string }[];
}

export const Card: React.FC<CardProps> = ({ data }) => {
  const { banner_image, summary, title, url, time_published } = data;

  return (
    <div
      style={{
        height: '444px',
        width: '333px',
        boxShadow: '3px 3px 3px 0.5px #888888',
        borderRadius: '5px',
        backgroundColor: '#FFFFFF',
        padding: '8px',
        color: 'black',
        textOverflow: 'hidden',
      }}
    >
      <div>
        <a href={`${url}`} target="_blank" style={{ textDecoration: 'none' }}>
          <img width="100%" src={`${banner_image}`} />
        </a>
      </div>
      <div>
        <p>{createDate(time_published)}</p>
        <span style={{ fontWeight: '700' }}>{`${title}`}</span>
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
