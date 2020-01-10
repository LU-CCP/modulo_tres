import { createReducer } from 'reduxsauce';
import produce from 'immer';

import {
  SAVE_USER,
  DELETE_USER,
  UPDATE_USER,
  SET_USER_EDIT
} from '../actions/users';

const INITIAL_STATE = {
  usersList: [],
  userEdit: {
    index: -1,
    data: null
  }
};

const saveUser = produce((draft, { user }) => {
  draft.usersList.push(user);
});

const deleteUser = produce((draft, { index }) => {
  draft.usersList = draft.usersList.filter((usert, i) => i !== index);
});

const updateUser = produce((draft, { user, index }) => {
  const indexnum = +index;

  draft.usersList.forEach((item, i) => {
    if (i === indexnum) {
      item.name.first = user.first;
      item.name.last = user.last;
      item.email = user.mail;
    }
  });
});

const setUserEdit = produce(({ userEdit }, { index, data }) => {
  userEdit.index = index;
  userEdit.data = data;
});

const reducer = createReducer(INITIAL_STATE, {
  [SAVE_USER]: saveUser,
  [DELETE_USER]: deleteUser,
  [UPDATE_USER]: updateUser,
  [SET_USER_EDIT]: setUserEdit
});

export default reducer;
