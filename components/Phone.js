import React from 'react';
import { useFadeinChildren } from './lib';

const SIZED = [
  {
    borderRadius: 1.5,
    gridGap: 0.6,
    width: 12,
    bezelPadding: 6,
    buttonRadius: 1
  },
  {
    borderRadius: 3,
    gridGap: 0.6,
    width: 25,
    bezelPadding: 6,
    buttonRadius: 2
  },
  {
    borderRadius: 5,
    gridGap: 1.2,
    width: 40,
    bezelPadding: 6,
    buttonRadius: 3
  }
];

export default ({ style, children, screenTitle, size = 0 }) => {
  const items = useFadeinChildren(children);

  return (
    <div
      style={{
        position: 'relative',
        width: `${SIZED[size].width}%`,
        paddingBottom: `${52.983 * (SIZED[size].width / SIZED[1].width)}%`,
        ...style
      }}
    >
      <div
        style={{
          position: 'absolute',
          borderRadius: `${SIZED[size].borderRadius}rem`,
          backgroundColor: '#27282F',
          padding: `${SIZED[size].bezelPadding}%`,
          height: '100%',
          width: '100%'
        }}
      >
        <div
          className="inertia-scroll"
          style={{
            borderRadius: `${SIZED[size].borderRadius * 0.6}rem`,
            backgroundColor: 'white',
            overflowY: 'scroll',
            height: '100%'
          }}
        >
          {screenTitle ? <h2 style={{ gridColumn: '1/4', gridRow: '1/2', width: '100%', textAlign: 'left', margin: '0', alignSelf: 'flex-end', marginTop: '6%', marginLeft: '6%' }}>{screenTitle}</h2> : null}
          <div
            style={{
              padding: `${SIZED[size].bezelPadding}%`,
              gridGap: `${SIZED[size].gridGap}rem`,
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridTemplateRows: 'repeat(9, 1fr)',
              height: '136%'
            }}
          >
            {items}
          </div>
        </div>
      </div>
      <div
        style={{
          height: '12.5%',
          width: '2%',
          borderTopRightRadius: `${SIZED[size].buttonRadius}rem`,
          borderBottomRightRadius: `${SIZED[size].buttonRadius}rem`,
          backgroundColor: '#101013',
          position: 'absolute',
          top: '17%',
          right: '-2%'
        }}
      />
    </div>
  );
};
