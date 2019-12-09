import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './store';
// import Counter from './Counter'; natvo
import Counter from './CounterHook';

const { store } = configureStore();

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default App;
