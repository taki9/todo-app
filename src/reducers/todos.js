import * as actionNames from '../actions/actionNames';

const todos = (state = [], action) => {
  switch (action.type) {
    case actionNames.SET_TODOS:
      return action.todos
    case actionNames.ADD_TODO:
      return [ ...state, { title: action.title, completed: false } ];
    case actionNames.TOGGLE_TODO:
      return state.map((todo, index) =>
        index === action.index
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case actionNames.PATCH_TODO:
      return state.map((todo, index) =>
        index === action.index
          ? { ...todo, title: action.title }
          : todo
      );
    case actionNames.DELETE_TODO:
      return state.filter((_, index) => index !== action.index);
    case actionNames.CLEAR_ALL_TODO:
      return [];
    default:
      return state;
  }
}

export default todos;