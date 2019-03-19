import * as actions from '.';
import { /* getTodos, */ getTodoById } from '../selectors';

export const setInitialState = () => {
  return async (dispatch, getState, /* localStorage */ api) => {
    // const todos = localStorage.getTodos();
    try {
      const todos = await api.get('/todos');
      dispatch(actions.resolveTodos(todos));
    } catch (error) {
      alert(`${error.status} - ${error.message}`);
    }
  };
};

export const addTodo = title => {
  return async (dispatch, getState, /* localStorage */ api) => {
    try {
      const todo = await api.post('/todos', {
        body: { title }
      });

      dispatch(actions.resolveTodo(todo));

      // localStorage.setTodos(getTodos(getState()));
    } catch (error) {
      alert(`${error.status} - ${error.message}`);
    }
  };
};

export const deleteTodo = id => {
  return async (dispatch, getState, /* localStorage */ api) => {
    try {
      const todos = await api.delete(`/todos/${id}`);

      dispatch(actions.resolveTodos(todos));

      // localStorage.setTodos(getTodos(getState()));
    } catch (error) {
      alert(`${error.status} - ${error.message}`);
    }
  };
};

export const toggleTodo = id => {
  return async (dispatch, getState, /* localStorage */ api) => {
    const todoBefore = getTodoById(getState(), { id });

    try {
      const todo = await api.put(`/todos/${id}`, {
        body: { completed: todoBefore ? !todoBefore.completed : true }
      });

      dispatch(actions.resolveTodo(todo));

      // localStorage.setTodos(getTodos(getState()));
    } catch (error) {
      alert(`${error.status} - ${error.message}`);
    }
  };
};

export const clearAllTodo = () => {
  return async (dispatch, getState, /* localStorage */ api) => {
    try {
      const todos = await api.delete('/todos');

      dispatch(actions.resolveTodos(todos));

      // localStorage.setTodos(getTodos(getState()));
    } catch (error) {
      alert(`${error.status} - ${error.message}`);
    }
  };
};

export const patchTodo = (id, title) => {
  return async (dispatch, getState, /* localStorage */ api) => {
    try {
      const todo = await api.put(`/todos/${id}`, {
        body: { title }
      });

      dispatch(actions.resolveTodo(todo));

      // localStorage.setTodos(getTodos(getState()));
    } catch (error) {
      alert(`${error.status} - ${error.message}`);
    }
  };
};
