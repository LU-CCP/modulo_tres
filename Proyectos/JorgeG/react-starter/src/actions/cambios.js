import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    setRandomUsers: ['data'],
    listaUsuarios: ['index', 'data'],
    dropUsuariosCargados: ['index'],
    setEditUser: ['index', 'data']
  },
  {
    prefix: 'TARJETA/'
  }
);

const {
  setRandomUsers,
  setEditUser,
  listaUsuarios,
  dropUsuariosCargados
} = Creators;

const {
  SET_RANDOM_USERS,
  SET_EDIT_USER,
  LISTA_USUARIOS,
  DROP_USUARIOS_CARGADOS
} = Types;

export {
  setRandomUsers,
  setEditUser,
  listaUsuarios,
  dropUsuariosCargados,
  SET_RANDOM_USERS,
  SET_EDIT_USER,
  LISTA_USUARIOS,
  DROP_USUARIOS_CARGADOS
};
