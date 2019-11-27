import { applyMiddleWare, createStore, compose } from "redux";
import { type } from "os";

function configureStore() {
  const enhancers = [];
  const { NODE_ENV } = process.env;
  const {
    __REDUX_DEVTOOLS_EXTENSION__: reduxDevToolsExtension,
    __REACT_DEVTOOLS_GLOBAL_HOOK__: reactDevToolsExtension
  } = window;

  if (
    NODE_ENV === "development" &&
    typeof reduxDevToolsExtension === "function"
  ) {
    enhancers.push(reduxDevToolsExtension());
  }

  if (NODE_ENV === "production" && typeof reactDevToolsExtension === "object") {
    Object.keys(reactDevToolsExtension).forEach(key => {
      reactDevToolsExtension[key] =
        typeof reactDevToolsExtension[key] === "function" ? () => {} : null;
    });
  }
  const middlewares = [];
  const composedEnhancers = compose(
    applyMiddleWare(...middlewares),
    ...enhancers
  );

  const store = createStore(() => ({}), composedEnhancers);

  return { store };
}

export default configureStore;
