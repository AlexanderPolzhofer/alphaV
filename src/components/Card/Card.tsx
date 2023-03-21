import React from 'react';

export const Card = () => {
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
        <a
          href="https://www.benzinga.com/markets/23/03/31443331/tuesdays-market-minute-countdown-to-the-fed-meeting"
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          <img
            width="100%"
            src="https://cdn.benzinga.com/files/images/story/2023/03/21/shutterstock_1655890180_3.jpg?width=1200&height=800&fit=crop"
          />
        </a>
      </div>
      <div>
        <p>23.3.23</p>
        <span style={{ fontWeight: '700' }}>
          Tuesday's Market Minute: Countdown To The Fed Meeting
        </span>
      </div>
      <div>
        <p>
          {`We are one day away from gaining better clarity on the Fed's view of
          the market events that have transpired in the past two weeks.
        `.substring(0, 100)}{' '}
          ...
        </p>
      </div>
    </div>
  );
};
