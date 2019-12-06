import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    fillUsers: ['element'],
    deleteUser: ['index']
  },
  {
    prefix: 'USERS/'
  }
);

const { fillUsers, deleteUser } = Creators;

const { FILL_USERS, DELETE_USER } = Types;

export { fillUsers, FILL_USERS, deleteUser, DELETE_USER };
