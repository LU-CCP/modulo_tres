import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { About, Counter, Login } from '../containers';

import { ROOT, ABOUT, COUNTER } from './paths';

const Routes = () => (
  <Switch>
    <Route exact path={ROOT} component={Login} />
    <Route exact path={ABOUT} component={About} />
    <Route exact path={COUNTER} component={Counter} />
  </Switch>
);

export default Routes;
