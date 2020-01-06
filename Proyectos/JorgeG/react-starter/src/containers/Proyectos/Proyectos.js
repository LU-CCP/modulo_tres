import React from 'react';
import { Container } from '@material-ui/core';

import Paperbase from '../Perfil';

const Proyectos = () => {
  const text = 'Proyectos';

  return (
    <Container>
      <Paperbase />
      <h1>{text}</h1>
    </Container>
  );
};

export default Proyectos;
