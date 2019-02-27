import initialState from './initialState';

const todos = (state = initialState.todos, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [ ...state, { title: action.title, completed: false } ];
    case 'TOGGLE_TODO':
      return state.map((todo, index) =>
        index === action.index
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'PATCH_TODO':
        return state.map((todo, index) =>
          index === action.index
            ? { ...todo, title: action.title }
            : todo
        );
    case 'DELETE_TODO':
        return state.filter((_, index) => index !== action.index);
    case 'CLEAR_ALL_TODO':
      return [];
    default:
      return state;
  }
}

export default todos;