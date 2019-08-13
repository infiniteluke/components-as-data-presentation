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
    <Hero style={{ width: '100%', height: '1.2em', borderRadius: '14px' }} />
    <TeaserImage style={{ width: '1.1em', height: '1.1em', margin: '.08em' }} />
    <TeaserText
      style={{ width: '100%', height: '.6em', borderRadius: '10px' }}
    />
  </div>
);
