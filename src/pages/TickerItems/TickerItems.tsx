import React from 'react';
import { TickerItem } from '../../components/TickerItem/TickerItem';
import { TickerItemsProps } from '../../types/types';
import './TickerItems.css';

export const TickerItems: React.FC<TickerItemsProps> = ({ tickerItems }) => {
  return (
    <div className="ticker-items-container">
      {tickerItems?.map((tickerItem) => (
        <TickerItem tickerItem={tickerItem} />
      ))}
    </div>
  );
};
