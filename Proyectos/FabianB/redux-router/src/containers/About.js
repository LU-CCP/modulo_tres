import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { goBack } from 'connected-react-router';

import useMount from '../hook/useMount';
import jsonApi from '../services/jsonApi';

const About = () => {
  const dispatch = useDispatch();
  const [user, setUsers] = useState([]);

  const handleGoBack = useCallback(() => dispatch(goBack()), [dispatch]);

  useMount(async () => {
    const { data } = await jsonApi().getUsers();

    if (Array.isArray(data)) {
      setUsers(data);
    }
  });

  return (
    <div>
      <h1>About Page</h1>
      <p>Did you get here via Redux?</p>
      <button onClick={handleGoBack}>Go Back</button>
      <div>
        {user.map(({ id, name }) => (
          <p key={id}>{name}</p>
        ))}
      </div>
    </div>
  );
};

export default About;
