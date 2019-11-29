import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { push } from 'connected-react-router';

import { ABOUT, COUNTER } from '../routes/paths';

const Home = () => {
  const dispatch = useDispatch();
  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <Link to={ABOUT}>About</Link>
      </div>
      <div>
        <Link to={COUNTER}>Counter</Link>
      </div>
      <button onClick={handleNavigate(ABOUT)}>About</button>
      <button onClick={handleNavigate(COUNTER)}>Counter</button>
    </div>
  );
};

export default Home;
