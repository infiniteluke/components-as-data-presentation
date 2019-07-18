import React from 'react';
import Hero from './Hero';
import Tablet from './Tablet';
import TeaserText from './TeaserText';
import TeaserImage from './TeaserImage';

export default props => (
  <Tablet {...props}>
    <Hero style={{ gridColumn: '1/10', gridRow: '1/3' }} />
    <TeaserImage style={{ gridColumn: '1/2', gridRow: '3/4' }} />
    <TeaserText style={{ gridColumn: '2/4', gridRow: '3/4' }} />
    <TeaserImage style={{ gridColumn: '4/5', gridRow: '3/4' }} />
    <TeaserText style={{ gridColumn: '5/7', gridRow: '3/4' }} />
    <TeaserImage style={{ gridColumn: '7/8', gridRow: '3/4' }} />
    <TeaserText style={{ gridColumn: '8/10', gridRow: '3/4' }} />
    <TeaserImage style={{ gridColumn: '1/2', gridRow: '4/5' }} />
    <TeaserText style={{ gridColumn: '2/4', gridRow: '4/5' }} />
    <TeaserImage style={{ gridColumn: '4/5', gridRow: '4/5' }} />
    <TeaserText style={{ gridColumn: '5/7', gridRow: '4/5' }} />
    <TeaserImage style={{ gridColumn: '7/8', gridRow: '4/5' }} />
    <TeaserText style={{ gridColumn: '8/10', gridRow: '4/5' }} />
    <TeaserImage style={{ gridColumn: '1/2', gridRow: '5/6' }} />
    <TeaserText style={{ gridColumn: '2/4', gridRow: '5/6' }} />
    <TeaserImage style={{ gridColumn: '4/5', gridRow: '5/6' }} />
    <TeaserText style={{ gridColumn: '5/7', gridRow: '5/6' }} />
    <TeaserImage style={{ gridColumn: '7/8', gridRow: '5/6' }} />
    <TeaserText style={{ gridColumn: '8/10', gridRow: '5/6' }} />
    <TeaserImage style={{ gridColumn: '1/2', gridRow: '6/7' }} />
    <TeaserText style={{ gridColumn: '2/4', gridRow: '6/7' }} />
    <TeaserImage style={{ gridColumn: '4/5', gridRow: '6/7' }} />
    <TeaserText style={{ gridColumn: '5/7', gridRow: '6/7' }} />
    <TeaserImage style={{ gridColumn: '7/8', gridRow: '6/7' }} />
    <TeaserText style={{ gridColumn: '8/10', gridRow: '7/8' }} />
    <TeaserImage style={{ gridColumn: '1/2', gridRow: '7/8' }} />
    <TeaserText style={{ gridColumn: '2/4', gridRow: '7/8' }} />
    <TeaserImage style={{ gridColumn: '4/5', gridRow: '7/8' }} />
    <TeaserText style={{ gridColumn: '5/7', gridRow: '7/8' }} />
    <TeaserImage style={{ gridColumn: '7/8', gridRow: '7/8' }} />
    <TeaserText style={{ gridColumn: '8/10', gridRow: '7/8' }} />
  </Tablet>
);
