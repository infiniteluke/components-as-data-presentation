import React from 'react';
import Hero from './Hero';
import Phone from './Phone';
import TeaserText from './TeaserText';
import TeaserImage from './TeaserImage';

export default props => (
  <Phone {...props}>
    <Hero style={{ gridColumn: '1/4', gridRow: '1/3' }} />
    <TeaserImage style={{ gridColumn: '1/2', gridRow: '3/4' }} />
    <TeaserText style={{ gridColumn: '2/4', gridRow: '3/4' }} />
    <TeaserImage style={{ gridColumn: '1/2', gridRow: '4/5' }} />
    <TeaserText style={{ gridColumn: '2/4', gridRow: '4/5' }} />
    <TeaserImage style={{ gridColumn: '1/2', gridRow: '5/6' }} />
    <TeaserText style={{ gridColumn: '2/4', gridRow: '5/6' }} />
    <TeaserImage style={{ gridColumn: '1/2', gridRow: '6/7' }} />
    <TeaserText style={{ gridColumn: '2/4', gridRow: '6/7' }} />
    <TeaserImage style={{ gridColumn: '1/2', gridRow: '7/8' }} />
    <TeaserText style={{ gridColumn: '2/4', gridRow: '7/8' }} />
    <TeaserImage style={{ gridColumn: '1/2', gridRow: '8/9' }} />
    <TeaserText style={{ gridColumn: '2/4', gridRow: '8/9' }} />
    <TeaserImage style={{ gridColumn: '1/2', gridRow: '9/10' }} />
    <TeaserText style={{ gridColumn: '2/4', gridRow: '9/10' }} />
  </Phone>
);
