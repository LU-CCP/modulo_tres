import { createReducer } from 'reduxsauce';
import produce from 'immer';

import { LISTA_USUARIOS } from '../actions/counter';

const INITIAL_STATE = {
  random: [],
  datosApi: [],
  api: []
};

const listaUsuarios = produce((draft, { index }) => {
  draft.datosApi.push(index);
  draft.api = draft.api.filter(i => i.login.uuid === index.login.uuid);
  console.log('tras: ', draft.datosApi);
  console.log('index: ', index);

  console.log('api___b: ', draft.api);
});

const reducer = createReducer(INITIAL_STATE, {
  [LISTA_USUARIOS]: listaUsuarios
});

export default reducer;
