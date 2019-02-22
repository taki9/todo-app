import initialState from './initialState';

const todos = (state = initialState.todos, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [ ...state, { title: action.title } ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.title === action.title
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    case 'PATCH_TODO':
        return state.map(todo =>
          todo.title === action.previousTitle
            ? { ...todo, title: action.title }
            : todo
        )
    case 'DELETE_TODO':
        return state.filter(todo => todo.title !== action.title)
    case 'CLEAR_ALL_TODO':
      return [];
    default:
      return state;
  }
}

export default todos;