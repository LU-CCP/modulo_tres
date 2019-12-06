import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { cssBaseline } from '@material-ui/core';

import Routes from '../../routes';
import theme from '../../theme';

const Root = () => (
  <MuiThemeProvider theme={theme}>
    <cssBaseline>
      <Routes />
    </cssBaseline>
  </MuiThemeProvider>
);

export default Root;
