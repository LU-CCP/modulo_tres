import { createReducer } from 'reduxsauce';
import produce from 'immer';

import { SEND_LIKE, SEND_DISLIKE } from '../actions/list';

const INITIAL_STATE = {
  foods: ['Arroz primavera', 'Carne con arroz', 'Puré con carne'],
  like: [],
  dislike: [],
  likes: 0,
  dislikes: 0
};

const sendLike = produce((draft, { index }) => {
  draft.like += 1;
});

const sendDislike = produce((draft, { index }) => {
  draft.like -= 1;
});

const reducer = createReducer(INITIAL_STATE, {
  [SEND_LIKE]: sendLike,
  [SEND_DISLIKE]: sendDislike
});

export default reducer;
