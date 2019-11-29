import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { goBack } from 'connected-react-router';

const About = () => {
  const dispatch = useDispatch();

  const handleGoBack = useCallback(() => dispatch(goBack()), [dispatch]);

  return (
    <div>
      <h1>About Page</h1>
      <p>Did you get here via Redux?</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default About;
