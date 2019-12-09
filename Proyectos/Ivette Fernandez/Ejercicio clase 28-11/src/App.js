import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './store';
import List from './List';

const { store } = configureStore();

const App = () => (
  <Provider store={store}>
    <List />
  </Provider>
);

export default App;
