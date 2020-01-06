import React from 'react';
import { Container } from '@material-ui/core';

import Paperbase from '../Perfil';

const Publicaciones = () => {
  const text = 'Publicaciones';

  return (
    <Container>
      <Paperbase />
      <h1>{text}</h1>
    </Container>
  );
};

export default Publicaciones;
