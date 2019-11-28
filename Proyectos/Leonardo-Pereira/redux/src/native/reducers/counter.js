import {
  INCREMENT,
  INCREMENT_ASYNC,
  DECREMENT,
  DECREMENT_ASYNC
} from '../actions/counter';

const INITIAL_SATE = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
};

const reducer = (state = INITIAL_SATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: false
      };

    case INCREMENT_ASYNC:
      return {
        ...state,
        isIncrementing: true
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: false
      };
    case DECREMENT_ASYNC:
      return {
        ...state,
        isDecrementing: true
      };

    default:
      return state;
  }
};

export default reducer;
