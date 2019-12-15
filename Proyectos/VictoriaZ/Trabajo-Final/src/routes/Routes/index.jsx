import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, RandomUsers, Users } from '../../containers';
import { ROOT, RANDOMUSERS, USERS } from '../paths';

const Routes = () => (
  <Switch>
    <Route exact path={ROOT} component={Home} />
    <Route exact path={RANDOMUSERS} component={RandomUsers} />
    <Route exact path={USERS} component={Users} />
  </Switch>
);

export default Routes;
