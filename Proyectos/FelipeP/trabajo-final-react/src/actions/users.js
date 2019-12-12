import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    saveUser: ['user'],
    deleteUser: ['index'],
    updateUser: ['user', 'index'],
    setUserEdit: ['index', 'data']
  },
  {
    prefix: 'USER/'
  }
);

const { saveUser, deleteUser, updateUser, setUserEdit } = Creators;

const { SAVE_USER, DELETE_USER, UPDATE_USER, SET_USER_EDIT } = Types;

export {
  saveUser,
  SAVE_USER,
  deleteUser,
  setUserEdit,
  DELETE_USER,
  updateUser,
  UPDATE_USER,
  SET_USER_EDIT
};
