import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ButtonHome } from '../containers/component';
import RandomUsers from '../containers/usuarios';

import { ROOT, LISTA_USUARIOS } from './paths';

const Routes = () => (
  <Switch>
    <Route exact path={ROOT} component={ButtonHome} />
    <Route exact path={LISTA_USUARIOS} component={RandomUsers} />
  </Switch>
);

export default Routes;
