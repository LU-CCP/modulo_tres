import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';

import lagash from '../../resources/images/logo-lagash.svg';

import useStyles from './styles';

const Nav = () => {
  const classes = useStyles();

  return (
    <AppBar position='static'>
      <Toolbar className={classes.nav}>
        <IconButton edge='start' color='inherit' aria-label='menu' />
        <img className={classes.logo} src={lagash} alt='' />
        <Typography variant='h6'>Trabajo final React</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
