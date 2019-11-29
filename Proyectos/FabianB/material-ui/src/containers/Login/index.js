import React from 'react';
import { Button, Container, Grid, Paper, TextField } from '@material-ui/core';

import useStyles from './style';

const Login = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth={false}>
      <Grid className={classes.grid}>
        <Paper className={classes.paper}>
          <TextField className={classes.item} variant='outlined' label='User' />
          <TextField
            className={classes.item}
            variant='outlined'
            label='Password'
            type='password'
          />
          <Button className={classes.item} variant='outlined'>
            Login
          </Button>
        </Paper>
      </Grid>
    </Container>
  );
};

// const Login = () => (
//   <div
//     style={{
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center'
//     }}
//   >
//     <p>User</p>
//     <input />
//     <p>Password</p>
//     <input type='password' />
//     <button>Login</button>
//   </div>
// );

export default Login;
