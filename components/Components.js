import React from 'react';
import Hero from './Hero';
import TeaserImage from './TeaserImage';
import TeaserText from './TeaserText';

export default ({ style }) => (
  <div
    style={{
      display: 'flex',
      padding: '0px 12%',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      ...style,
    }}
  >
    <Hero style={{ width: '100%', height: '.9em' }} />
    <TeaserImage style={{ width: '.9em', height: '.9em', margin: '.08em' }} />
    <TeaserText style={{ width: '100%', height: '.5em' }} />
  </div>
);
