import React from 'react';
import { Button, Container, Grid, Paper, TextField } from '@material-ui/core';

const Login = () => (
  <Container maxWidth={false}>
    Login Lagash
    <Grid>
      <Paper>
        <TextField variant='outlined' label='Usuario' />
        <TextField variant='outlined' label='Contraseña' type='password' />
        <Button variant='outlined'>Login</Button>
      </Paper>
    </Grid>
  </Container>
);
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
