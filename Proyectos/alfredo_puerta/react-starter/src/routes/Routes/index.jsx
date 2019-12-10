import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Example, Home, Ramdom, Users } from '../../containers';
import { ROOT, HOME, RAMDOM, USERS } from '../paths';

const Routes = () => (
  <Switch>
    <Route exact path={ROOT} component={Example} />
    <Route exact path={HOME} component={Home} />
    <Route exact path={RAMDOM} component={Ramdom} />
    <Route exact path={USERS} component={Users} />
  </Switch>
);

export default Routes;
