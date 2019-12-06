import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { Button, Container, Grid } from '@material-ui/core';

import { RANDOMUSERS, USERSLIST } from '../../routes/paths';
import univ from '../../resources/images/univ.png';

import useStyles from './styles';

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);

  return (
    <Container className={classes.container}>
      <Grid>
        <Button
          onClick={handleNavigate(RANDOMUSERS)}
          variant='contained'
          color='primary'
          className={classes.button}
        >
          Random users
        </Button>
        <Button
          onClick={handleNavigate(USERSLIST)}
          variant='contained'
          color='secondary'
          className={classes.button}
        >
          Users list
        </Button>
      </Grid>
      <img className={classes.univ} src={univ} alt='Logo Lagash University' />
    </Container>
  );
};

export default Home;
