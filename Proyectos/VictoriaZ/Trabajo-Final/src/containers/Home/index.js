import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { Container, Grid, Button } from '@material-ui/core';

import { USERS, RANDOMUSERS } from '../../routes/paths';

import useStyles from './styles';

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);

  return (
    <Container>
      <Grid className={classes.grid}>
        <Button
          className={classes.item}
          color='primary'
          variant='contained'
          onClick={handleNavigate(RANDOMUSERS)}
        >
          {'Random Users'}
        </Button>
        <Button
          className={classes.item}
          color='secondary'
          variant='contained'
          onClick={handleNavigate(USERS)}
        >
          {'Users'}
        </Button>
      </Grid>
    </Container>
  );
};

export default Home;
