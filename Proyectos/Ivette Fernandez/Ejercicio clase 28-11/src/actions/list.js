// import { createReducer } from 'reduxsauce';
// import produce from 'immer';

// eslint-disable-next-line no-use-before-define
const { SEND_LIKES, SEND_DISLIKES } = Types;
// eslint-disable-next-line no-use-before-define
const { sendLikes, sendDislikes } = Creators;

// eslint-disable-next-line no-undef
const { Types, Creators } = createActions(
  {
    sendLikes: ['index'],
    sendDislikes: ['index']
  },
  {
    prefix: 'LIST/'
  }
);

export { sendDislikes, sendLikes, SEND_DISLIKES, SEND_LIKES };
