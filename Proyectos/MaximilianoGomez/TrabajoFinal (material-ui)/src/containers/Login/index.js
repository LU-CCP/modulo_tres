import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Container, Grid, Paper } from '@material-ui/core';
import { push } from 'connected-react-router';

import { LISTA_USUARIOS } from '../../routes/paths';

import useStyles from './style';

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleNavigate = useCallback(route => () => dispatch(push(route)), [
    dispatch
  ]);

  return (
    <Container className={classes.container} maxWidth={false}>
      <Grid className={classes.grid}>
        <Paper>
          <Button
            onClick={handleNavigate(LISTA_USUARIOS)}
            className={classes.random}
            variant='outlined'
          >
            RANDOM USERS
          </Button>
          <Button className={classes.users} variant='outlined'>
            USERS
          </Button>
        </Paper>
      </Grid>
    </Container>
  );
};

//   const Login = () => (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center'
//       }}
//     >
//       <p>User</p>
//       <input />
//       <p>Password</p>
//       <input type='password' />
//       <button>Login</button>
//     </div>
// );

export default Login;
