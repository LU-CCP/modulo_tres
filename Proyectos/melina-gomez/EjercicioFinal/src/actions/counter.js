import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    listaUsuarios: ['index']
  },
  {
    prefix: 'COUNTER/'
  }
);

const { listaUsuarios } = Creators;

const { LISTA_USUARIOS } = Types;

export { listaUsuarios, LISTA_USUARIOS };
