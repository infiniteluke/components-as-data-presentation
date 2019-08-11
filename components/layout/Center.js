import React from 'react';

export default ({ children, horiz = true, vert = true, style }) => (
  <div
    style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      ...style,
    }}
  >
    <div
      style={{
        position: 'absolute',
        left: horiz ? '50%' : 0,
        top: vert ? '50%' : 0,
        transform: `translate(${horiz ? '-50%' : 0}, ${vert ? '-50%' : 0})`,
      }}
    >
      {children}
    </div>
  </div>
);
