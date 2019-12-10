import { createReducer } from 'reduxsauce';
import produce from 'immer';

import { SEND_LIKE, SEND_DISLIKE } from '../actions/list';

const INITIAL_STATE = {
  menus: ['pasta', 'pizza', 'lasagna'],
  likeMenus: [],
  dislikeMenus: [],
  likes: 0,
  dislikes: 0
};
//  const sendLikes = produce(draft,action) => {
//    const {index} = action;
//    draft.likes += 1;

//  });
const sendLikes = produce((draft, { index }) => {
  draft.likes += 1;
  draft.likeMenus.push(draft.menus[index]);
  draft.menus = draft.menus.filter((m, i) => i !== index);
});
const sendDislikes = produce((draft, { index }) => {
  draft.dislikes += 1;
  draft.dislikeMenus.push(draft.menus[index]);
  draft.menus = draft.menus.filter((m, i) => i !== index);
});

const reducer = createReducer(INITIAL_STATE, {
  [SEND_LIKE]: sendLikes,
  [SEND_DISLIKE]: sendDislikes
});

export default reducer;
