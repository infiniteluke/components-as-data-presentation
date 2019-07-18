import React from 'react';
import { useSteps } from '@mdx-deck/components';
import { useSpring, animated } from 'react-spring';

const POSITIONS = [
  'FAR_LEFT',
  'LEFT',
  'MID_LEFT',
  'MID_RIGHT',
  'RIGHT',
  'FAR_RIGHT'
];

const OFFSET = 1.75;

const SLOT_SIZE = (100 - OFFSET * 2) / (POSITIONS.length - 1);
const SLOT_SIZES = POSITIONS.reduce((acc, cur, index) => {
  if (index === 0) {
    return [...acc, OFFSET];
  }
  return [...acc, acc[index - 1] + SLOT_SIZE];
}, []);

const LEFT_STEP_POSITIONS = POSITIONS.reduce(
  (acc, cur, index) => ({
    ...acc,
    [cur]: SLOT_SIZES[index]
  }),
  {}
);

export default ({ style, steps = [POSITIONS[0]] }) => {
  const step = useSteps(steps.length - 1);
  const pos = LEFT_STEP_POSITIONS[steps[step]];
  if (!pos) {
    console.error(`"${steps[step]}" is not a valid position: ${POSITIONS}`);
    return null;
  }
  const lastPos = step === 0 ? 0 : LEFT_STEP_POSITIONS[steps[step - 1]];
  const props = useSpring({ left: pos, from: { left: lastPos } });

  return (
    <animated.div
      style={{
        height: '80%',
        width: '2.5%',
        left: props.left.interpolate(left => `${left}%`),
        transform: props.left.interpolate(left => `translateX(-${left}%)`),
        position: 'absolute',
        borderTopLeftRadius: '1em',
        borderTopRightRadius: '1em',
        bottom: 0,
        backgroundImage: 'linear-gradient(90deg, #35aa4e, #5dbb71)',
        ...style
      }}
    />
  );
};
