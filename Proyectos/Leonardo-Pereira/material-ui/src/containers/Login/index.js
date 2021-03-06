import React from 'react';
import { Button, Container, Grid, Paper, TextField } from '@material-ui/core';

import useStyles from './styles';

const Login = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth={false}>
      <Grid className={classes.grid}>
        <Paper className={classes.paper}>
          <h1>Inicio de sesión</h1>
          <TextField
            className={classes.item}
            variant='outlined'
            label='Usuario'
          />
          <TextField
            className={classes.item}
            variant='outlined'
            label='Contraseña'
            type='password'
          />
          <Button variant='outlined'>Logear</Button>
        </Paper>
      </Grid>
    </Container>
  );
};

/* const Login = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}
  >
    <p>User</p>
    <input />
    <p>Password</p>
    <input type='password' />
    <button>Login</button>
  </div>
);
*/

export default Login;
