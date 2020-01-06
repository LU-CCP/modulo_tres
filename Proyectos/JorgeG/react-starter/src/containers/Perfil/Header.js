import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  IconButton,
  Hidden,
  Grid,
  Typography
} from '@material-ui/core';
import {
  Menu as MenuIcon,
  ExitToApp as ExitToAppIcon
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import { ROOT } from '../../routes/paths';

const useStyles = makeStyles({
  toolbar: {
    backgroundColor: '#18202c',
    width: '100%',
    position: '-webkit-sticky'
  }
});

function Header(props) {
  const { onDrawerToggle } = props;
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);

  return (
    <React.Fragment>
      <AppBar className={classes.toolbar}>
        <Toolbar>
          <Grid container spacing={1} alignItems='center'>
            <Hidden smUp>
              <Grid item>
                <IconButton xs={2} color='inherit' onClick={onDrawerToggle}>
                  <MenuIcon />{' '}
                  <Typography variant='h6'>Jorge Gajardo</Typography>
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item xs />
            <Grid item>
              <IconButton xs={2} color='inherit' onClick={handleNavigate(ROOT)}>
                {'Salir'}
                <ExitToAppIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired
};
export default Header;
