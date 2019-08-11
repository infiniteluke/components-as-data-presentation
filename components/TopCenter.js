import React from 'react';

export default ({ children }) => (
  <div
    style={{
      position: 'absolute',
      top: '0%',
      left: '50%',
      width: '100%',
      transform: 'translateX(-50%)',
      whiteSpace: 'nowrap',
    }}
  >
    {children}
  </div>
);
