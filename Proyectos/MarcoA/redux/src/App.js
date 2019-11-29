import React from 'react';
import { Provider } from 'react-redux';

import Counter from './CounterHook';
import configureStore from './store';

const { store } = configureStore();

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default App;