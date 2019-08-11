import React from 'react';

export default ({ children, style }) => (
  <div
    style={{
      width: '100%',
      display: 'grid',
      alignItems: 'center',
      gridTemplateColumns: '1fr 1fr',
      ...style,
    }}
  >
    {children}
  </div>
);
