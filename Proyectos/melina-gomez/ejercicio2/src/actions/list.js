import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    sendLikes: ['index'],
    sendDislikes: ['index']
  },
  {
    prefix: 'LIST/'
  }
);
const { sendLikes, sendDislikes } = Creators;
const { SEND_LIKE, SEND_DISLIKE } = Types;

export { sendDislikes, sendLikes, SEND_DISLIKE, SEND_LIKE };
