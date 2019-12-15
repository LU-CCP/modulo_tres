import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './store';
<<<<<<< HEAD
import Counter from './CounterHooks';
=======
import List from './List';
>>>>>>> eec3be26ef71ea660c72eeacdc52037dd80db725

const { store } = configureStore();

const App = () => (
  <Provider store={store}>
<<<<<<< HEAD
    <Counter />
=======
    <List />
>>>>>>> eec3be26ef71ea660c72eeacdc52037dd80db725
  </Provider>
);

export default App;
