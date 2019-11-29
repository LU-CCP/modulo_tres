import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  sendLikes: ['index'],
  sendDislikes: ['index']
});

const { sendLikes, sendDislikes } = Creators;
const { SEND_LIKES, SEND_DISLIKES } = Types;

export { sendDislikes, sendLikes, SEND_DISLIKES, SEND_LIKES };
