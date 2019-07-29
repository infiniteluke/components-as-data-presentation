import React from 'react';
import { animated } from 'react-spring';

export const SwitchRow = ({ style, children }) => (
  <animated.div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      position: 'relative',
      width: '500px',
      padding: '20px',
      marginBottom: '20px',
      backgroundColor: '#f3f2f7',
      borderRadius: '20px',
      ...style
    }}
  >
    {children}
  </animated.div>
);

export const SettingsList = ({ children }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column'
    }}
  >
    {children}
  </div>
);
