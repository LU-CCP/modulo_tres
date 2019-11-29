import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Routes from '../../routes';

const Root = () => (
  <MuiThemeProvider>
    <CssBaseline />
    <Routes />
  </MuiThemeProvider>
);

export default Root;
