import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './store';
import ListHook from './ListHook';

const { store } = configureStore();

const App = () => (
  <Provider store={store}>
    <ListHook />
  </Provider>
);

export default App;
