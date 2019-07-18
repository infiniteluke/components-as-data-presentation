import React from 'react';
import Hero from './Hero';
import Laptop from './Laptop';
import TeaserText from './TeaserText';
import TeaserImage from './TeaserImage';

export default props => (
  <Laptop {...props}>
    <Hero style={{ gridColumn: '1/11', gridRow: '1/3' }} />
    <TeaserImage style={{ gridColumn: '2/3', gridRow: '3/4' }} />
    <TeaserText style={{ gridColumn: '1/4', gridRow: '4/5' }} />
    <TeaserImage style={{ gridColumn: '5/6', gridRow: '3/4' }} />
    <TeaserText style={{ gridColumn: '4/7', gridRow: '4/5' }} />
    <TeaserImage style={{ gridColumn: '8/9', gridRow: '3/4' }} />
    <TeaserText style={{ gridColumn: '7/10', gridRow: '4/5' }} />
    <TeaserImage style={{ gridColumn: '2/3', gridRow: '5/6' }} />
    <TeaserText style={{ gridColumn: '1/4', gridRow: '6/7' }} />
    <TeaserImage style={{ gridColumn: '5/6', gridRow: '5/6' }} />
    <TeaserText style={{ gridColumn: '4/7', gridRow: '6/7' }} />
    <TeaserImage style={{ gridColumn: '8/9', gridRow: '5/6' }} />
    <TeaserText style={{ gridColumn: '7/10', gridRow: '6/7' }} />
    <TeaserImage style={{ gridColumn: '2/3', gridRow: '7/8' }} />
    <TeaserText style={{ gridColumn: '1/4', gridRow: '8/9' }} />
    <TeaserImage style={{ gridColumn: '5/6', gridRow: '7/8' }} />
    <TeaserText style={{ gridColumn: '4/7', gridRow: '8/9' }} />
    <TeaserImage style={{ gridColumn: '8/9', gridRow: '7/8' }} />
    <TeaserText style={{ gridColumn: '7/10', gridRow: '8/9' }} />
  </Laptop>
);
