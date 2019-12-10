import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    saveUser: ['index'],
    deleteUser: ['index'],
    editUser: ['index'],
    openForm: ['index'],
    closeForm: null
  },
  {
    prefix: 'HOME/'
  }
);

const { saveUser, deleteUser, editUser, openForm, closeForm } = Creators;

const { SAVE_USER, DELETE_USER, EDIT_USER, OPEN_FORM, CLOSE_FORM } = Types;

export {
  Types,
  saveUser,
  deleteUser,
  editUser,
  openForm,
  closeForm,
  SAVE_USER,
  DELETE_USER,
  EDIT_USER,
  OPEN_FORM,
  CLOSE_FORM
};

export default Creators;
