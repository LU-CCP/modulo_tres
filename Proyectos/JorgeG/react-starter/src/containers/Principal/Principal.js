import React, { useCallback } from 'react';
import { Button, Container, Grid, Paper } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

import logo from '../../resources/svg/eduK.png';
import loginBg from '../../resources/svg/libros.jpg';
import { LOGIN } from '../../routes/paths';
import Copyright from '../Copyright';

const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: 0,
    paddingRight: 0
  },
  grid: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'left',
    backgroundImage: `url(${loginBg})`,
    [theme.breakpoints.down('md')]: {
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    },
    [theme.breakpoints.up('lg')]: {
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 400,
    padding: theme.spacing(4),
    opacity: 0.7
  },
  item: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  imagen: {
    width: '50%',
    height: '50%',
    alignSelf: 'center',
    borderRadius: '5px'
  }
}));

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);

  return (
    <Container className={classes.container} maxWidth={false}>
      <Grid className={classes.grid}>
        <Paper className={classes.paper}>
          <img className={classes.imagen} src={logo} alt='logo' />
          <p>
            <h2>Edu-K</h2>
            Es un portal web, que tiene por objetivo facilitar la carga
            académica de los docentes asociados a instituciones de estudio de
            nivel superior
          </p>
          <Button
            color='primary'
            onClick={handleNavigate(LOGIN)}
            className={classes.item}
            variant='contained'
          >
            {'Login'}
          </Button>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Paper>
      </Grid>
    </Container>
  );
}
