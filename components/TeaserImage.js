import React from 'react';
import { animated } from 'react-spring';

export default ({ style }) => (
  <animated.div
    style={{
      background: 'linear-gradient(45deg, #FF19FF, #FF4BFF)',
      borderRadius: '50%',
      height: '100%',
      ...style,
    }}
  />
);
