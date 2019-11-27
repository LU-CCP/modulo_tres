import { applyMiddleware, createStore, compose } from 'redux';

function configureStore() {
  // habilitar solo para modo desarrollador
  const enhancers = [];
  const { NODE_ENV } = process.env;
  const {
    __REDUX_DEVTOOLS_EXTENSION__: reduxDevToolsExtension,
    __REACT_DEVTOOLS_GLOBAL_HOOK__: reactDevToolsExtension
  } = window; // window es una variable global
  // }

  if (
    NODE_ENV === 'development' &&
    typeof reduxDevToolsExtension === 'function'
  ) {
    enhancers.push(reduxDevToolsExtension());
  }

  if (
    NODE_ENV === 'production' &&
    typeof reactDevToolsExtension === 'object' // para saber si esta instalada la extension
  ) {
    // se quiere desactivar como? destruyendo todas las propiedades
    Object.keys(reactDevToolsExtension).forEach(key => {
      reactDevToolsExtension[key] =
        typeof reactDevToolsExtension[key] === 'function' ? () => {} : null;
    }); // si es funcion lo deja como funcion vacia y si no le otorga un valor vacio
  }

  // esto es lo que configura el store
  const middlewares = [];
  const composedEnhancers = compose(
    applyMiddleware(...middlewares),
    ...enhancers
  );

  const store = createStore(() => ({}), composedEnhancers);

  return { store };
}

export default configureStore;
