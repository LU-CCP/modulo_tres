import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { Link } from 'react-router-dom';

import { ABOUT, COUNTER } from '../routes/paths';

const Home = () => {
  const dispatch = useDispatch();
  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);

  return (
    <div>
      <h1>V I R G I N I O</h1>
      <div>
        <Link to={ABOUT}>Gomez</Link>
      </div>
      <div>
        <Link to={COUNTER}>Instituto</Link>
      </div>
      <button onClick={handleNavigate(ABOUT)}>About</button>
      <button onClick={handleNavigate(COUNTER)}>Counter</button>
    </div>
  );
};

export default Home;
