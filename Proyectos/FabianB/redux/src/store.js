import { applyMiddleware, createStore, compose } from 'redux';

import createRootReducer from './custom/reducers';

function configureStore() {
  const enhacers = [];
  const { NODE_ENV } = process.env;
  const {
    __REDUX_DEVTOOLS_EXTENSION__: reduxDevToolsExtension,

    __REAC_DEVTOOLS_GLOBAL_HOOK__: reactDevToolsExtension
  } = window;

  if (
    NODE_ENV === 'development' &&
    typeof reduxDevToolsExtension === 'function'
  ) {
    enhacers.push(reduxDevToolsExtension());
  }

  if (NODE_ENV === 'production' && typeof reactDevToolsExtension === 'object') {
    Object.keys(reactDevToolsExtension).forEach(key => {
      reactDevToolsExtension[key] =
        typeof reactDevToolsExtension[key] === 'function' ? () => {} : null;
    });
  }

  const middlewares = [];
  const composedEnhacers = compose(
    applyMiddleware(...middlewares),
    ...enhacers
  );

  const rootReducer = createRootReducer();

  const store = createStore(rootReducer, composedEnhacers);

  return { store };
}

export default configureStore;
