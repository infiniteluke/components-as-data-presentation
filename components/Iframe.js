import React from 'react';

export default props => {
  const [loading, setLoading] = React.useState(true);
  const [show, setShow] = React.useState(false);
  const [showFallback, setShowFallback] = React.useState(false);
  const onLoad = () => setLoading(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (loading && !show) {
        setShowFallback(true);
      }
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [loading, show]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (!loading) {
        setShow(true);
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [loading]);

  let content = null;
  if (loading) {
    content = (
      <h1>
        loading an
        <br /> iframe lol 🤞🏻
      </h1>
    );
  }
  if (!loading && !show) {
    content = <h1>omg it worked 🎉</h1>;
  }
  if (showFallback) {
    content = props.fallback || (
      <pre>No fallback provided. You're out of luck</pre>
    );
  }

  return (
    <React.Fragment>
      {content}
      <iframe
        onLoad={onLoad}
        style={{
          display: !show || showFallback ? 'none' : 'block',
          margin: '2%',
          width: '96%',
          height: '96%',
        }}
        frameBorder="0"
        {...props}
      ></iframe>
    </React.Fragment>
  );
};
