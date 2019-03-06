import * as actions from '.';
import { getTodos } from '../selectors';

export const setInitialState = () => {
  return (dispatch, getState, localStorage) => {
    const todos = localStorage.getTodos();

    dispatch(actions.setTodos(todos));
  }
}

export const addTodo = title => {
  return (dispatch, getState, localStorage) => {
    dispatch(actions.addTodo(title));

    localStorage.setTodos(getTodos(getState()));
  }
}

export const deleteTodo = index => {
  return (dispatch, getState, localStorage) => {
    dispatch(actions.deleteTodo(index));

    localStorage.setTodos(getTodos(getState()));
  }
}

export const toggleTodo = index => {
  return (dispatch, getState, localStorage) => {
    dispatch(actions.toggleTodo(index));

    localStorage.setTodos(getTodos(getState()));
  }
}

export const clearAllTodo = index => {
  return (dispatch, getState, localStorage) => {
    dispatch(actions.clearAllTodo(index));

    localStorage.setTodos(getTodos(getState()));
  }
}

export const patchTodo = (index, title) => {
  return (dispatch, getState, localStorage) => {
    dispatch(actions.patchTodo(index, title));

    localStorage.setTodos(getTodos(getState()));
  }
}