import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    sendLike: ['index'],
    sendDislike: ['index']
  },
  {
    prefix: 'LIST/'
  }
);

const { sendLike, sendDislike } = Creators;
const { SEND_LIKE, SEND_DISLIKE } = Types;

export { sendLike, sendDislike, SEND_LIKE, SEND_DISLIKE };
