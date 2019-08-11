import React from 'react';

export default ({ children }) => (
  <div
    style={{
      display: 'grid',
      gridGap: '3.5% 2%',
      gridTemplateColumns: 'repeat(5, calc(20% - .5% - 1%))',
      gridTemplateRows: 'repeat(3, calc(33.333% - 1.5% - 1.75%))',
      alignItems: 'center',
      justifyItems: 'center',
      width: '100%',
      height: '100%',
      padding: '6% 3.37%',
    }}
  >
    {children}
  </div>
);
