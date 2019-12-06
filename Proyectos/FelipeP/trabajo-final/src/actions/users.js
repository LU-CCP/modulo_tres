import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    saveUser: ['user'],
    deleteUser: ['index'],
    updateUser: ['user', 'index']
  },
  {
    prefix: 'USER/'
  }
);

const { saveUser, deleteUser, updateUser } = Creators;

const { SAVE_USER, DELETE_USER, UPDATE_USER } = Types;

export {
  saveUser,
  SAVE_USER,
  deleteUser,
  DELETE_USER,
  updateUser,
  UPDATE_USER
};
