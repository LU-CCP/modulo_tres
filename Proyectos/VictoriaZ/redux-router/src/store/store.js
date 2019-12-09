import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import createRootReducer from '../reducers';

function configureStore() {
  const enhancers = [];
  const { NODE_ENV } = process.env;
  const {
    __REDUX_DEVTOOLS_EXTENSION__: reduxDevToolsExtension,
    __REACT_DEVTOOLS_GLOBAL_HOOK__: reactDevToolsExtension
  } = window;

  if (
    NODE_ENV === 'development' &&
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

  const history = createBrowserHistory(); // nuevo
  const reduxRouterMiddleware = routerMiddleware(history); // nuevo

  const middlewares = [reduxRouterMiddleware]; // antes estaba vacio
  const composedEnhancers = compose(
    applyMiddleware(...middlewares),
    ...enhancers
  );
  const rootReducer = createRootReducer(history); // para importarlo a reducers index.js
  const store = createStore(rootReducer, composedEnhancers);

  return { store, history };
}

export default configureStore;
