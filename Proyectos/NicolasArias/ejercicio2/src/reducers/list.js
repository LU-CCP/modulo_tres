import { createReducer } from 'reduxsauce';
import { produce } from 'immer';

import { SEND_LIKE, SEND_DISLIKE } from '../actions/list';

const INITIAL_STATE = {
  menu: ['arroz con pollo', 'lentejas', 'bistec a lo pobre', 'porotos'],
  menuLikes: [],
  menuDislikes: [],
  likes: 0,
  dislikes: 0
};

const sendLike = produce((draft, { index }) => {
  draft.likes += 1;
  draft.menuLikes.push(draft.menu[index]);
  draft.menu = draft.menu.filter((m, i) => i !== index); // m: menu -- i: índice
});

const sendDislike = produce((draft, { index }) => {
  draft.dislikes += 1;
  draft.menuDislikes.push(draft.menu[index]);
  draft.menu = draft.menu.filter((m, i) => i !== index);
});

const reducer = createReducer(INITIAL_STATE, {
  [SEND_LIKE]: sendLike,
  [SEND_DISLIKE]: sendDislike
});

export default reducer;
