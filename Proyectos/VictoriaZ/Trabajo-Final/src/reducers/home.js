import { createReducer } from 'reduxsauce';
import produce from 'immer';

import {
  EDIT_USER,
  SAVE_USER,
  DELETE_USER,
  OPEN_FORM,
  CLOSE_FORM
} from '../actions/home';

const INITIAL_STATE = {
  users: {
    usersList: [],
    modifiedUser: {
      first: '',
      last: '',
      email: '',
      id: '',
      picture: '',
      posicion: ''
    }
  },
  randomUsers: {
    randomUsersList: []
  },
  editar: false
};

const saveUser = produce((draft, { index }) => {
  draft.users.usersList.push({
    first: draft.randomUsers.randomUsersList[index].first,
    last: draft.randomUsers.randomUsersList[index].last,
    email: draft.randomUsers.randomUsersList[index].email,
    picture: draft.randomUsers.randomUsersList[index].picture,
    id: draft.randomUsers.randomUsersList[index].id
  });

  draft.randomUsers.randomUsersList = draft.randomUsers.randomUsersList.filter(
    (v, i) => index !== i
  );
});

const editUser = produce((draft, { index }) => {
  const { firstName, lastName, mail } = index;

  draft.users.usersList[draft.users.modifiedUser.posicion].first = firstName;
  draft.users.usersList[draft.users.modifiedUser.posicion].last = lastName;
  draft.users.usersList[draft.users.modifiedUser.posicion].email = mail;
  draft.editar = false;
});

const deleteUser = produce((draft, { index }) => {
  draft.users.usersList = draft.users.usersList.filter((v, i) => index !== i);
});

const openForm = produce((draft, { index }) => {
  draft.users.modifiedUser.first = draft.users.usersList[index].first;
  draft.users.modifiedUser.last = draft.users.usersList[index].last;
  draft.users.modifiedUser.email = draft.users.usersList[index].email;
  draft.editar = true;
  draft.users.modifiedUser.posicion = index;
});

const closeForm = produce(draft => {
  draft.editar = false;
});

const reducer = createReducer(INITIAL_STATE, {
  [SAVE_USER]: saveUser,
  [EDIT_USER]: editUser,
  [DELETE_USER]: deleteUser,
  [OPEN_FORM]: openForm,
  [CLOSE_FORM]: closeForm
});

export default reducer;
