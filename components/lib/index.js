import React from 'react';
import { useTrail, useSprings, animated } from 'react-spring';
import { useSteps } from '@mdx-deck/components';

export function useFadeinChildren(children) {
  const trail = useTrail(React.Children.count(children), {
    from: {
      opacity: 0
    },
    opacity: 1
  });
  return trail.map((props, index) => {
    const child = children[index];
    return React.cloneElement(child, {
      style: { ...child.props.style, ...props, key: index }
    });
  });
}

export function useSlideInChildren(children) {
  const trail = useTrail(React.Children.count(children), {
    from: { transform: `translate3d(-40px,0,0)` },
    transform: `translate3d(0,0px,0)`
  });
  return trail.map((props, index) => {
    const child = Array.isArray(children) ? children[index] : children;
    const style = child.props ? child.props.style : {};
    return React.cloneElement(child, {
      style: { ...style, ...props, key: index }
    });
  });
}

export function useBlurInChildren(children) {
  const trail = useTrail(React.Children.count(children), {
    from: { filter: `blur(1rem)` },
    filter: `blur(0)`
  });
  return trail.map((props, index) => {
    const child = Array.isArray(children) ? children[index] : children;
    const style = child.props ? child.props.style : {};
    return React.cloneElement(child, {
      style: { ...style, ...props, key: index }
    });
  });
}

export function useZoomChildrenSteps(children) {
  const step = useSteps(React.Children.count(children) - 1);
  const normal = {
    transition: 'transform .5s ease',
    transform: 'scale(1)'
  };
  const zoomed = {
    transition: 'transform .5s ease',
    transform: 'scale(1.4)'
  };
  return React.Children.map(children, (child, index) => {
    const style = child.props ? child.props.style : {};
    return React.cloneElement(
      child,
      index === step
        ? { style: { ...style, ...zoomed } }
        : { style: { ...style, ...normal } }
    );
  });
}

export function BlurIn({ children }) {
  return useBlurInChildren(children);
}

export function ZoomSteps({ children }) {
  return useZoomChildrenSteps(children);
}

export function SlideIn({ children }) {
  return useSlideInChildren(children);
}
