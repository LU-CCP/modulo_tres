import { createReducer } from 'reduxsauce';
import produce from 'immer';

import {
  LISTA_USUARIOS,
  DROP_USUARIOS_CARGADOS,
  SET_RANDOM_USERS,
  SET_EDIT_USER
} from '../actions/counter';

const INITIAL_STATE = {
  random: [],
  datosApi: [],
  api: [],
  editUser: {
    index: -1,
    data: null
  }
};

const setRandomUsers = produce((draft, { data }) => {
  draft.api = data;
});

const setEditUser = produce(({ editUser }, { index, data }) => {
  editUser.index = index;
  editUser.data = data;
});

const listaUsuarios = produce((draft, { index, data }) => {
  draft.datosApi.push(data);
  draft.api = draft.api.filter((value, i) => index !== i);
});
const dropUsuariosCargados = produce((draft, { index }) => {
  console.log('index todo', index);
  draft.datosApi.splice(index.index, 1);
});

const reducer = createReducer(INITIAL_STATE, {
  [LISTA_USUARIOS]: listaUsuarios,
  [DROP_USUARIOS_CARGADOS]: dropUsuariosCargados,
  [SET_RANDOM_USERS]: setRandomUsers,
  [SET_EDIT_USER]: setEditUser
});

export default reducer;
