import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { Link } from 'react-router-dom'; // para la ruta dd se quiere navegar

import { ABOUT, COUNTER } from '../routes/paths';

const Home = () => {
  const dispatch = useDispatch();
  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);

  return (
    <div>
      <div>
        <h1>Home Page</h1>
      </div>
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
