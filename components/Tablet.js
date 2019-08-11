import React from 'react';
import { useFadeinChildren } from './lib';

const SIZED = [
  {
    borderRadius: 1.5,
    width: 40,
    bezelPadding: 3,
    buttonRadius: 1,
  },
  {
    borderRadius: 3,
    width: 75,
    bezelPadding: 4,
    buttonRadius: 2,
  },
  {
    borderRadius: 5,
    width: 40,
    bezelPadding: 6,
    buttonRadius: 3,
  },
];

export default ({ style, children, size = 2 }) => {
  const items = useFadeinChildren(children);

  return (
    <div
      style={{
        position: 'relative',
        width: `${SIZED[size].width}%`,
        paddingBottom: `${47 * (SIZED[size].width / SIZED[1].width)}%`,
        ...style,
      }}
    >
      <div
        style={{
          width: '4.5%',
          height: '1%',
          borderTopLeftRadius: `${SIZED[size].buttonRadius}rem`,
          borderTopRightRadius: `${SIZED[size].buttonRadius}rem`,
          backgroundColor: '#101013',
          position: 'absolute',
          top: '-1%',
          left: '8%',
        }}
      />
      <div
        style={{
          width: '4.5%',
          height: '1%',
          borderTopLeftRadius: `${SIZED[size].buttonRadius}rem`,
          borderTopRightRadius: `${SIZED[size].buttonRadius}rem`,
          backgroundColor: '#101013',
          position: 'absolute',
          top: '-1%',
          left: '13%',
        }}
      />
      <div
        style={{
          height: '10.5%',
          width: '1%',
          borderTopLeftRadius: `${SIZED[size].buttonRadius}rem`,
          borderBottomLeftRadius: `${SIZED[size].buttonRadius}rem`,
          backgroundColor: '#101013',
          position: 'absolute',
          top: '15%',
          left: '-1%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          borderRadius: `${SIZED[size].borderRadius}rem`,
          backgroundColor: '#27282F',
          padding: `${SIZED[size].bezelPadding}%`,
          height: '100%',
          width: '100%',
        }}
      >
        <div
          className="inertia-scroll"
          style={{
            borderRadius: `${SIZED[size].borderRadius * 0.6}rem`,
            backgroundColor: 'white',
            overflowY: 'scroll',
            height: '100%',
          }}
        >
          <div
            style={{
              padding: `${SIZED[size].bezelPadding}%`,
              gridGap: `1rem`,
              display: 'grid',
              gridTemplateColumns: 'repeat(9, 1fr)',
              gridTemplateRows: 'repeat(7, 1fr)',
              height: '127%',
            }}
          >
            {items}
          </div>
        </div>
      </div>
    </div>
  );
};
