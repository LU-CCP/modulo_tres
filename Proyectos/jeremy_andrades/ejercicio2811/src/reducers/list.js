import { createReducer } from 'reduxsauce';
import produce from 'immer';

import { LIKE, DISLIKE } from '../actions/list';

const INITIAL_STATE = {
  menus: ['arroz con pollo', 'papitas fritas', 'cazuela', 'porotos'],
  like: 0,
  dislike: 0,
  MenuLike: [],
  MenuDislike: []
};

const like = produce((draft, { index }) => {
  draft.like += 1;
  draft.MenuLike.push(menus[0]);
});

const dislike = produce((draft, { index }) => {
  draft.dislike += 1;
  draft.MenuDislike.push(menus[0]);
});

const reducer = createReducer(INITIAL_STATE, {
  [LIKE]: like,
  [DISLIKE]: dislike
});

export { reducer, INITIAL_STATE };
