import React from 'react';
import { useSteps } from '@mdx-deck/components';
import Switch from './Switch';

export default (props) => {
  const step = useSteps(2);
  return <Switch on={step === 1} {...props} />;
};
