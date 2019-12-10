import { applyMiddleware, createStore, compose } from 'redux';

<<<<<<< HEAD
// import createRootReducer from './native/reducers';
import createRootReducer from './custom/reducers';
=======
import createRootReducer from './reducers';
>>>>>>> eec3be26ef71ea660c72eeacdc52037dd80db725

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
