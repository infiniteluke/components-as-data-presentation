import React from 'react';
import Switch from './Switch';

export default ({ label = '', style }) => {
  const [on, setOn] = React.useState(false);
  const toggleOn = () => setOn(val => !val);
  return <Switch on={on} toggle={toggleOn} style={style} label={label} />;
};
