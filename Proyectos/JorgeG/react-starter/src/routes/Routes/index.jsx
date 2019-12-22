import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Tarjeta, Login, Perfil, DatosPersonales } from '../../containers';
import { ROOT, PERFIL, TARJETA, DATOSPERSONALES } from '../paths';

const Routes = () => (
  <Switch>
    <Route exact path={ROOT} component={Login} />
    <Route exact path={PERFIL} component={Perfil} />
    <Route exact path={TARJETA} component={Tarjeta} />
    <Route exact path={DATOSPERSONALES} component={DatosPersonales} />
  </Switch>
);

export default Routes;
