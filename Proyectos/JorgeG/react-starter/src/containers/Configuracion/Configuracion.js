import React from 'react';
import { Container } from '@material-ui/core';

import Paperbase from '../Perfil';

const Configuracion = () => {
  const text = 'Configuracion';

  return (
    <Container>
      <Paperbase />
      <h1>{text}</h1>
    </Container>
  );
};

export default Configuracion;
