import React from 'react';
import { animated } from 'react-spring';

export default ({ style }) => (
  <animated.div
    style={{
      background: 'linear-gradient(45deg, #00CCFF, #4BE8FF)',
      borderRadius: '.6em',
      ...style,
    }}
  />
);
