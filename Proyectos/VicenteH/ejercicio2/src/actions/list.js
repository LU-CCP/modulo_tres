import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    increment: null,
    increment2: null
  },
  {
    prefix: 'LIST/'
  }
);

const { increment, increment2 } = Creators;

const { INCREMENT, INCREMENT2 } = Types;

export { increment, increment2, INCREMENT, INCREMENT2 };
