import React from 'react';
import { animated } from 'react-spring';

export default ({ style }) => (
  <animated.div
    style={{
      background: 'linear-gradient(45deg, #0DE22B, #4BFF4B)',
      borderRadius: '.3em',
      height: '100%',
      ...style,
    }}
  />
);
