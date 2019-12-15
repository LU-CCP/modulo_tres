// enrutador

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { About, Counter, Home } from '../containers';

import { ROOT, ABOUT, COUNTER } from './paths';

// component funcional
const Routes = () => (
  // se le pasa la ruta como variable para evitar errores <Route exact path='/about' component={About} />
  // para usar el switch se usa el paquete rect-con router, conf store
  <Switch>
    <Route exact path={ROOT} component={Home} />
    <Route exact path={ABOUT} component={About} />
    <Route exact path={COUNTER} component={Counter} />
  </Switch>
);

export default Routes;
