import { createReducer } from 'reduxsauce';
import produce from 'immer';

import { LISTA_USUARIOS, DROP_USUARIOS_CARGADOS } from '../actions/counter';

const INITIAL_STATE = {
  random: [],
  datosApi: [],
  api: []
};

const dropUsuariosCargados = produce((draft, { index }) => {
  console.log('index todo', index);
  draft.datosApi.splice(index.index, 1);
});
const listaUsuarios = produce((draft, { index }) => {
  draft.datosApi.push(index);
  // dropUsuariosCargados.apply(draft);
});

const reducer = createReducer(INITIAL_STATE, {
  [LISTA_USUARIOS]: listaUsuarios,
  [DROP_USUARIOS_CARGADOS]: dropUsuariosCargados
});

export default reducer;
