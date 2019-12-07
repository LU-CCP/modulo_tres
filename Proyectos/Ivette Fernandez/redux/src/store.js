import { applyMiddleware, createStore, compose } from 'redux';

import createRootReducer from './custom/reducers';

function configureStore() {
  const enhancers = [];
  const { NODE_ENV } = process.env;
  const {
    __REDUX_DEVTOOLS_EXTENSION__: reduxDevToolsExtension,
    __REDUX_DEVTOOLS_GLOVAL_HOOK__: reactDevToolsExtension
  } = window;

  if (
    NODE_ENV === 'development' && // === evalúa valor y tipo
    typeof reduxDevToolsExtension === 'function'
  ) {
    enhancers.push(reduxDevToolsExtension());
  }

  if (NODE_ENV === 'production' && typeof reactDevToolsExtension === 'object') {
    Object.keys(reactDevToolsExtension).forEach(key => {
      reactDevToolsExtension[key] =
        typeof reactDevToolsExtension[key] === 'function' ? () => {} : null;
    });
  }

  const middlewares = [];
  const composedEnhancers = compose(
    applyMiddleware(...middlewares),
    ...enhancers
  );

  const rootReducer = createRootReducer();
  const store = createStore(rootReducer, composedEnhancers);

  return { store };
}

export default configureStore;
