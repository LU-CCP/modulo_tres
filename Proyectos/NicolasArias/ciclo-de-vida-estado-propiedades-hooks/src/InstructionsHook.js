import React, { useEffect } from 'react';

const Instructions = () => {
  // eslint-disable-next-line arrow-body-style
  useEffect(() => {
    return () => {
      console.log('Instructions componentWillUnmount');
    };
  }, []);

  return (
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
  );
};

export default Instructions;
