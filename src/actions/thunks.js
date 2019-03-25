import { push } from 'connected-react-router';
import * as actions from '.';
import { /* getTodos, */ getTodoById } from '../selectors';

const loginUrl = '/login';

export const setInitialState = () => {
  return async (dispatch, getState, /* localStorage */ api) => {
    // const todos = localStorage.getTodos();
    try {
      const todos = await api.get('/todos');
      dispatch(actions.resolveTodos(todos));
    } catch (error) {
      if (error.status === 401) {
        return dispatch(push(loginUrl));
      }

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
      if (error.status === 401) {
        return dispatch(push(loginUrl));
      }

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
      if (error.status === 401) {
        return dispatch(push(loginUrl));
      }

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
      if (error.status === 401) {
        return dispatch(push(loginUrl));
      }

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
      if (error.status === 401) {
        return dispatch(push(loginUrl));
      }

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
      if (error.status === 401) {
        return dispatch(push(loginUrl));
      }

      alert(`${error.status} - ${error.message}`);
    }
  };
};

export const login = (username, password) => {
  return async (dispatch, getState, api) => {
    try {
      const data = await api.post('/login', {
        body: { username, password }
      });

      dispatch(actions.resolveMe(data.me));

      return data.token;
    } catch (error) {
      alert(`${error.status} - ${error.message}`);
    }
  };
};

export const renewToken = token => {
  return async (dispatch, getState, api) => {
    try {
      const data = await api.put('/login', {
        body: { prevJwt: token }
      });

      dispatch(actions.resolveMe(data.me));

      return data.token;
    } catch (error) {
      alert(`${error.status} - ${error.message}`);
    }
  };
};

