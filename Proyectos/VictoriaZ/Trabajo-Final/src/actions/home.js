import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    saveUser: ['index', 'data'],
    deleteUser: ['index'],
    editUser: ['index', 'data'],
    openForm: ['index'],
    closeForm: null,
    setRandomUsers: ['data']
  },
  {
    prefix: 'HOME/'
  }
);

const {
  saveUser,
  deleteUser,
  editUser,
  openForm,
  closeForm,
  setRandomUsers
} = Creators;

const {
  SAVE_USER,
  DELETE_USER,
  EDIT_USER,
  OPEN_FORM,
  CLOSE_FORM,
  SET_RANDOM_USERS
} = Types;

export {
  Types,
  saveUser,
  deleteUser,
  editUser,
  openForm,
  closeForm,
  setRandomUsers,
  SAVE_USER,
  DELETE_USER,
  EDIT_USER,
  OPEN_FORM,
  CLOSE_FORM,
  SET_RANDOM_USERS
};

export default Creators;
