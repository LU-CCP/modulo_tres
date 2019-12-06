import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { UsersList, Home, RandomUsers } from '../../containers';
import { USERSLIST, ROOT, RANDOMUSERS } from '../paths';

const Routes = () => (
  <Switch>
    <Route exact path={ROOT} component={Home} />
    <Route exact path={USERSLIST} component={UsersList} />
    <Route exact path={RANDOMUSERS} component={RandomUsers} />
  </Switch>
);

export default Routes;
