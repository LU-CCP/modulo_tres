import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  Tarjeta,
  Login,
  Perfil,
  DatosPersonales,
  Configuracion,
  DatosTesistas,
  Publicaciones,
  Proyectos,
  Principal
} from '../../containers';
import {
  LOGIN,
  PERFIL,
  TARJETA,
  DATOSPERSONALES,
  CONFIGURACION,
  DATOSTESISTAS,
  PUBLICACIONES,
  PROYECTOS,
  HOME
} from '../paths';

const Routes = () => (
  <Switch>
    <Route exact path={LOGIN} component={Login} />
    <Route exact path={PERFIL} component={Perfil} />
    <Route exact path={TARJETA} component={Tarjeta} />
    <Route exact path={DATOSPERSONALES} component={DatosPersonales} />
    <Route exact path={CONFIGURACION} component={Configuracion} />
    <Route exact path={DATOSTESISTAS} component={DatosTesistas} />
    <Route exact path={PUBLICACIONES} component={Publicaciones} />
    <Route exact path={PROYECTOS} component={Proyectos} />
    <Route exact path={HOME} component={Principal} />
  </Switch>
);

export default Routes;
