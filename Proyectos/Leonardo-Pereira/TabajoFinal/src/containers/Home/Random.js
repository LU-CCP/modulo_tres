import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { goBack } from 'connected-react-router';

const Random = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Listado de personas aleatoreo</h1>
    </div>
  );
};

export default Random;
