import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { About, Counter, Home } from '../containers';
import Modal from '../containers/Modal';

import { ROOT, ABOUT, COUNTER, MODAL } from './paths';

const Routes = () => (
  <Switch>
    <Route exact path={ROOT} component={Home} />
    <Route exact path={ABOUT} component={About} />
    <Route exact path={COUNTER} component={Counter} />
    <Route exact path={MODAL} component={Modal} />
  </Switch>
);

export default Routes;
