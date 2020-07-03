import uuid from 'uuid/v4';
import { ADD_TODO } from 'Actions/actions.js';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: uuid(), task: action.task, completed: false }];
    default:
      return state;
  }
};

export default reducer;
