import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { goBack } from 'connected-react-router';

const Users = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Listado de personas </h1>
    </div>
  );
};

export default Users;
