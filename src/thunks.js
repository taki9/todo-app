import * as actions from './actions';

export const setInitialState = () => {
  return async (dispatch, getState, localStorage) => {
    const todos = await localStorage.getTodos();

    todos.map(todo => dispatch(actions.addTodo(todo.title)));
  }
}

export const addTodo = title => {
  return async (dispatch, getState, localStorage) => {
    await localStorage.pushTodo(title);
    dispatch(actions.addTodo(title));
  }
}

export const deleteTodo = index => {
  return async (dispatch, getState, localStorage) => {
    await localStorage.removeTodo(index);
    dispatch(actions.deleteTodo(index));
  }
}

export const toggleTodo = index => {
  return async (dispatch, getState, localStorage) => {
    await localStorage.markAsCompleted(index);
    dispatch(actions.toggleTodo(index));
  }
}

export const clearAllTodo = index => {
  return async (dispatch, getState, localStorage) => {
    await localStorage.clearTodos(index);
    dispatch(actions.clearAllTodo(index));
  }
}

export const patchTodo = (index, title) => {
  return async (dispatch, getState, localStorage) => {
    await localStorage.editTodo(index, title);
    dispatch(actions.patchTodo(index, title));
  }
}