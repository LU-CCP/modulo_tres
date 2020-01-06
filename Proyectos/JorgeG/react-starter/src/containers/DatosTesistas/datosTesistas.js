import React from 'react';
import { Container } from '@material-ui/core';

import Paperbase from '../Perfil';

const DatosTesistas = () => {
  const text = 'DatosTesistas';

  return (
    <Container>
      <Paperbase />
      <h1>{text}</h1>
    </Container>
  );
};

export default DatosTesistas;
