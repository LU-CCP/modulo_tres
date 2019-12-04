import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Container, Grid, Paper } from '@material-ui/core';
import { push } from 'connected-react-router';

import useStyle from './styles';

const ButtonHome = () => {
  const estilo = useStyle();
  const dispatch = useDispatch();
  const handleNavigate = useCallback(route => () => dispatch(push(route)), [
    dispatch
  ]);

  return (
    <Container className={estilo.container} maxWidth={false}>
      <Grid className={estilo.grid}>
        <Paper>
          <Button
            onClick={handleNavigate(LISTA_USUARIOS)}
            className={estilo.random}
            variant='outlined'
          >
            RANDOM USERS
          </Button>
          <Button className={estilo.users} variant='outlined'>
            USERS
          </Button>
        </Paper>
      </Grid>
    </Container>
  );
};

export default ButtonHome;
