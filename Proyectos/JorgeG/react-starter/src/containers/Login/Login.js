import React, { useCallback, useState } from 'react';
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  FormControl,
  IconButton,
  InputLabel,
  InputAdornment,
  OutlinedInput
} from '@material-ui/core';

// import CssBaseline from '@material-ui/core/CssBaseline';

// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import jsonApi from '../../services/index';
import useMount from '../../hooks/useMount';
import logo from '../../resources/svg/eduK.png';
import loginBg from '../../resources/svg/arcoUdec.jpg';
import { DATOSPERSONALES } from '../../routes/paths';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='localhost:3000'>
        {'Edu-K'}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: 0,
    paddingRight: 0
  },
  grid: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
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
    maxWidth: 500,
    padding: theme.spacing(4),
    opacity: 0.9
  },
  item: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  imagen: {
    width: '50%',
    height: '50%',
    alignSelf: 'center'
  }
}));

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  useMount(async () => {
    const { data } = await jsonApi().getUsers();
    const { results } = data;

    if (Array.isArray(results)) {
      console.log(data);
    }
  });
  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Container className={classes.container} maxWidth={false}>
      <Grid className={classes.grid}>
        <Paper className={classes.paper}>
          <img className={classes.imagen} src={logo} alt='logo' />
          <TextField
            className={classes.item}
            variant='outlined'
            label='Rut'
            color='primary'
          />
          <FormControl
            className={classes.item}
            variant='outlined'
            color='primary'
          >
            <InputLabel htmlFor='outlined-adornment-password'>
              {'Contraseña'}
            </InputLabel>
            <OutlinedInput
              id='outlined-adornment-password'
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            color='primary'
            onClick={handleNavigate(DATOSPERSONALES)}
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
