import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { store, history } from '../../store';
import Root from '../Root';
import Nav from '../../components/Nav';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Nav />
      <Root />
    </ConnectedRouter>
  </Provider>
);

export default App;
