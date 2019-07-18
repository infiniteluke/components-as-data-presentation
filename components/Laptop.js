import React from 'react';
import { useFadeinChildren } from './lib';

const SIZED = [
  {
    borderRadius: 1,
    width: 40,
    bezelPadding: 4,
    keyboardRadius: 35
  },
  {
    borderRadius: 3,
    width: 75,
    bezelPadding: 4
  },
  {
    borderRadius: 5,
    width: 40,
    bezelPadding: 6
  }
];

export default ({ style, children, size = 2 }) => {
  const items = useFadeinChildren(children);

  return (
    <div
      style={{
        position: 'relative',
        width: `${SIZED[size].width}%`,
        paddingBottom: `${52 * (SIZED[size].width / SIZED[1].width)}%`,
        ...style
      }}
    >
      <div
        style={{
          position: 'absolute',
          borderTopRightRadius: `${SIZED[size].borderRadius}rem`,
          borderTopLeftRadius: `${SIZED[size].borderRadius}rem`,
          backgroundColor: '#27282F',
          padding: `${SIZED[size].bezelPadding}%`,
          height: '100%',
          width: '100%'
        }}
      >
        <div
          style={{
            borderTopRightRadius: `${SIZED[size].borderRadius * 0.6}rem`,
            borderTopLeftRadius: `${SIZED[size].borderRadius * 0.6}rem`,
            backgroundColor: 'white',
            overflow: 'scroll',
            height: '100%'
          }}
        >
          <div
            className="inertia-scroll"
            style={{
              padding: `${SIZED[size].bezelPadding}%`,
              gridGap: `.5rem`,
              display: 'grid',
              gridTemplateColumns: 'repeat(9, 1fr)',
              gridTemplateRows: 'repeat(8, 1fr)',
              height: '131%'
            }}
          >
            {items}
          </div>
        </div>
      </div>
      <div
        style={{
          height: '8.5%',
          left: '50%',
          transform: 'translate(-50%)',
          width: `${100 * 1.2}%`,
          borderBottomLeftRadius: `${SIZED[size].keyboardRadius}%`,
          borderBottomRightRadius: `${SIZED[size].keyboardRadius}%`,
          backgroundColor: '#18191d',
          position: 'absolute',
          bottom: '-1%'
        }}
      />
    </div>
  );
};
