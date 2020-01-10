import { createReducer } from 'reduxsauce';
import produce from 'immer';

import {
  EDIT_USER,
  SAVE_USER,
  DELETE_USER,
  OPEN_FORM,
  CLOSE_FORM,
  SET_RANDOM_USERS
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

const setRandomUsers = produce(({ randomUsers }, { data }) => {
  randomUsers.randomUsersList = data;
});

const saveUser = produce((draft, { index, data }) => {
  draft.users.usersList.push(data);

  draft.randomUsers.randomUsersList = draft.randomUsers.randomUsersList.filter(
    (v, i) => index !== i
  );
});

const editUser = produce((draft, { index, data }) => {
  const user = draft.users.usersList[index];

  draft.users.usersList[index] = { ...user, ...data };
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
  [CLOSE_FORM]: closeForm,
  [SET_RANDOM_USERS]: setRandomUsers
});

export default reducer;
