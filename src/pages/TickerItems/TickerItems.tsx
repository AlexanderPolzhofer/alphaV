import React from 'react';
import { TickerItem } from '../../components/TickerItem/TickerItem';
import { TickerItemsProps } from '../../types/types';
import './TickerItems.css';

export const TickerItems: React.FC<TickerItemsProps> = ({ tickerItems }) => {
  return (
    <>
      <h1>{tickerItems.title}</h1>
      <div className="ticker-items-container">
        {tickerItems.tickerData.map((tickerItem) => (
          <TickerItem tickerItem={tickerItem} key={tickerItem.ticker} />
        ))}
      </div>
    </>
  );
};
