// eslint-disable-next-line no-unused-vars
import React from "react";
import { Povider } from "react-redux";

import configureStore from "./store";

const { store } = configureStore();

const App = () => <Povider store={store} />;

export default App;
