import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Login } from '../containers';

import { ROOT } from './paths';

const Routes = () => (
  <Switch>
    <Route exact path={ROOT} component={Login} />
  </Switch>
);

export default Routes;
