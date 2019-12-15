import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    like: 'index',
    dislike: 'index'
  },
  {
    prefix: 'LIST/'
  }
);

const { like, dislike } = Creators;

const { LIKE, DISLIKE } = Types;

export { like, dislike, LIKE, DISLIKE };
