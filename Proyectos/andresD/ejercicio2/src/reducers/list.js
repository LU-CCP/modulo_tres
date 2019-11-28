import { createReducer } from 'reduxsauce';
import produce from 'immer';

import { SEND_LIKE, SEND_DISLIKE } from '../actions/list';

const INITIAL_STATE = {
  menus: ['arroz', 'lentejas', 'bistec', 'porotos'],
  likeMenus: [],
  dislikeMenus: [],
  likes: 0,
  dislikes: 0
};

const sendLike = produce((draft, action) => {
  const { index } = action;

  draft.likes += 1;
  draft.likeMenus.push(draft.menus[index]);
  draft.menus = draft.menus.filter((m, i) => i !== index);
});

const sendDislike = produce((draft, action) => {
  const { index } = action;

  draft.dislikes += 1;
  draft.dislikeMenus.push(draft.menus[index]);
  draft.menus = draft.menus.filter((m, i) => i !== index);
});

const reducer = createReducer(INITIAL_STATE, {
  [SEND_LIKE]: sendLike,
  [SEND_DISLIKE]: sendDislike
});

export default reducer;
