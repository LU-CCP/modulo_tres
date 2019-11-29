import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { store, history } from '../store';
import Route from '../routes';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route />
    </ConnectedRouter>
  </Provider>
);

export default App;
