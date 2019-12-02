import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Login } from '../containers';
import RandomUsers from '../containers/usuarios';

import { ROOT, LISTA_USUARIOS } from './paths';

const Routes = () => (
  <Switch>
    <Route exact path={ROOT} component={Login} />
    <Route exact path={LISTA_USUARIOS} component={RandomUsers} />
  </Switch>
);

export default Routes;
