import React from 'react';

export default ({ children, style }) => (
  <div
    style={{
      fontSize: '4rem',
      ...style,
    }}
  >
    {children}
  </div>
);
