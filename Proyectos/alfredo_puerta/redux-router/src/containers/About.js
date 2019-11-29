import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { goBack } from 'connected-react-router';

import useMount from '../hooks/useMount';
import jsonApi from '../services/jsonApi';

const About = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);

  const handleGoback = useCallback(() => dispatch(goBack()), [dispatch]);

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
      <button onClick={handleGoback}>Go Back</button>
      <div>
        {users.map(({ name, id }) => (
          <p key={id}>
            {id} {name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default About;
