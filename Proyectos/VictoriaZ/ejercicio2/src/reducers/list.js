import { createReducer } from 'reduxsauce';
import produce from 'immer';

import { SEND_LIKE, SEND_DISLIKE } from '../actions/list';

const INITIAL_STATE = {
  like: 0,
  dislike: 0,
  menu: ['arroz con pollo', 'lentejas', 'bistec a lo pobre', 'porotos'],
  menuLike: [],
  menuDislike: []
};

const sendLike = produce((draft, { index }) => {
  draft.like += 1;
  draft.menuLike.push(draft.menu[index]);
  draft.menu = draft.menu.filter((v, i) => index !== i);
  // delete draft.menu[index];[]
  // draft.menu.filter(draft.menu[index]);
});

const sendDislike = produce((draft, { index }) => {
  draft.dislike += 1;
  draft.menuDislike.push(draft.menu[index]);
  draft.menu = draft.menu.filter((v, i) => index !== i);
});

const reducer = createReducer(INITIAL_STATE, {
  [SEND_LIKE]: sendLike,
  [SEND_DISLIKE]: sendDislike
});

export default reducer;
