import React, { useCallback } from 'react';
import { Button, Container } from '@material-ui/core';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

import { ABOUT, COUNTER } from '../routes/paths';

import useStyles from './styles';

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);

  return (
    <Container className={(classes.Container, classes.root)} maxWidth={false}>
      <h1>Trabajofinal</h1>
      <Button
        onClick={handleNavigate(ABOUT)}
        className={classes.item}
        variant='contained'
        color='primary'
      >
        RANDOM USERS
      </Button>
      <Button
        onClick={handleNavigate(COUNTER)}
        className={classes.item}
        variant='contained'
        color='secondary'
      >
        USERS
      </Button>
    </Container>
  );
};

export default Login;
