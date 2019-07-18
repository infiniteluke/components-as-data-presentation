import React from 'react';

export const SwitchRow = ({ style, children }) => (
  <div
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
  </div>
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
