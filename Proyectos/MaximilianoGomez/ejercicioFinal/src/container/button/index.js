import React from 'react';
import { Button, Container } from '@material-ui/core';

import useStyles from './style';

const ButtonHome = () => {
  const estilos = useStyles();

  return (
    <Container>
      <Button className={estilos.item}>RANDOM USERS</Button>
      <Button className={estilos.item}>USERS</Button>
    </Container>
  );
};

export default ButtonHome;
