import { createReducer } from 'reduxsauce';
import produce from 'immer';

import { SEND_DISLIKES, SEND_LIKES } from '../actions/list';

const INITIAL_STATE = {
  likes: 0,
  dislikes: 0,
  arrayLikes: [],
  arrayDislikes: [],
  arrayMedio: ['Queso', 'Palta', 'Mostaza', 'Ketchup', 'Mayonesa']
};

const sendLikes = produce((draft, { index }) => {
  console.log(index);
  draft.likes += 1;
  draft.arrayLikes.push(draft.arrayMedio[index]);
  draft.arrayMedio = draft.arrayMedio.filter((v, i) => index !== i);
});

const sendDislikes = produce((draft, { index }) => {
  console.log(index);
  draft.dislikes += 1;
  draft.arrayDislikes.push(draft.arrayMedio[index]);
  draft.arrayMedio = draft.arrayMedio.filter((v, i) => index !== i);
});

const reducer = createReducer(INITIAL_STATE, {
  [SEND_DISLIKES]: sendDislikes,
  [SEND_LIKES]: sendLikes
});

export default reducer;
