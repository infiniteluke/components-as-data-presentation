import React from 'react';

export default (props) => {
  const [loading, setLoading] = React.useState(true);
  const [show, setShow] = React.useState(false);
  const onLoad = (e) => console.log(e.target) || setLoading(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (!loading) {
        setShow(true);
      }
    }, 500)
    return () => {
      clearTimeout(timer)
    };
  }, [loading])

  let message = loading ? <h1>loading an<br/> iframe lol 🤞🏻</h1> : null;
  if (!loading && !show) {
    message = <h1>omg it worked 🎉</h1>
  }

  return (
    <React.Fragment>
      {message}
      <iframe
        onLoad={onLoad}
        style={{
          display: !show ? 'none' : 'block',
          margin: '2%',
          width: '96%',
          height: '96%',
        }}
        frameBorder="0"
        {...props}
      >
      </iframe>
    </React.Fragment>
  );
}