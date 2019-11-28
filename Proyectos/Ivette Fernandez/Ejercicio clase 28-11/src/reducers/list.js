import { createReducer } from 'reduxsauce';
import produce from 'immer';

import { SEND_LIKES, SEND_DISLIKES } from '../actions/list';

const INITIAL_STATE = {
  menus: ['uno', 'dos', 'tres', 'cuatro'],
  likeMenus: [],
  dislikesMenus: [],
  likes: 0,
  dislikes: 0
};

const Likes = produce((draft, { index }) => {
  draft.likes += 1;
  draft.likeMenus.push(draft.menus[index]);
  draft.menus.slice(0, 1);
});

const Dislikes = produce((draft, { index }) => {
  draft.dislikes += 1;
  draft.dislikeMenus.push(draft.menus[index]);
  draft.menus.slice(0, 1);
});

const reducer = createReducer(INITIAL_STATE, {
  [SEND_LIKES]: Likes,
  [SEND_DISLIKES]: Dislikes
});

export default reducer;
