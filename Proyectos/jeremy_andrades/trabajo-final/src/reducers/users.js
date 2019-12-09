import { createReducer } from 'reduxsauce';
import produce from 'immer';

import { SAVE_USER, DELETE_USER, UPDATE_USER } from '../actions/users';

const INITIAL_STATE = {
  usersList: []
};

const saveUser = produce((draft, { user }) => {
  draft.usersList.push(user);
});

const deleteUser = produce((draft, { index }) => {
  draft.usersList = draft.usersList.filter((usert, i) => i !== index);
});

const updateUser = produce((draft, { user, index }) => {
  index = Number(index);

  draft.usersList.forEach((item, i) => {
    if (i === index) {
      item.name.first = user.first;
      item.name.last = user.last;
      item.email = user.mail;
    }
  });
});

const reducer = createReducer(INITIAL_STATE, {
  [SAVE_USER]: saveUser,
  [DELETE_USER]: deleteUser,
  [UPDATE_USER]: updateUser
});

export default reducer;
