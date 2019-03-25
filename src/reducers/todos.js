import * as actionNames from '../actions/actionNames';

const todos = (state = [], action) => {
  switch (action.type) {
    case actionNames.RESOLVE_TODO:
      if (state.some(todo => todo.id === action.todo.id)) {
        return state.map(todo =>
          todo.id === action.todo.id ? action.todo : todo
        );
      }
      return [...state, action.todo];
    case actionNames.RESOLVE_TODOS:
      return action.todos;
    case actionNames.LOGOUT:
      return [];
    default:
      return state;
  }
};

export default todos;
