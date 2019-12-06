import { createReducer } from 'reduxsauce';
import produce from 'immer';

import { FILL_USERS, DELETE_USER } from '../actions/randomUsers';

const INITIAL_STATE = {
  usersRandomList: []
};

const fillUsers = produce((draft, { element }) => {
  draft.usersRandomList = element.map(e => e);
});

const deleteUser = produce((draft, { index }) => {
  draft.usersRandomList = draft.usersRandomList.filter(
    (user, i) => i !== index
  );
});

const reducer = createReducer(INITIAL_STATE, {
  [DELETE_USER]: deleteUser,
  [FILL_USERS]: fillUsers
});

export default reducer;
