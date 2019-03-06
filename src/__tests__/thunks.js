import * as thunks from '../actions/thunks';
import * as actions from '../actions/actionNames';

describe('thunks', () => {
  const dispatch = jest.fn();
  const getState = jest.fn();
  const localStorage = {
    getTodos: jest.fn(),
    setTodos: jest.fn()
  };

  beforeEach(() => {
    dispatch.mockReset();
    getState.mockReset();
    localStorage.getTodos.mockReset();
    localStorage.setTodos.mockReset();
  });

  describe('setInitialState', () => {
    test('it resolves todos from local storage', () => {
      const todos = [
        {
          title: 'a',
          completed: false
        },
        {
          title: 'b',
          completed: true
        }
      ];

      localStorage.getTodos.mockReturnValue(todos);

      thunks.setInitialState()(dispatch, getState, localStorage);
      expect(localStorage.getTodos).toHaveBeenCalledTimes(1);
      expect(localStorage.getTodos).toHaveBeenNthCalledWith(1);
      expect(dispatch).toHaveBeenCalledWith({ type: actions.SET_TODOS, todos });
    });
  });

  describe('addTodo', () => {
    test('it adds a todo into store and local storage', () => {
      const nextState = { todos: [{ title : 'a', completed: false }] };

      getState.mockReturnValue(nextState);
      thunks.addTodo('a')(dispatch, getState, localStorage);
      expect(dispatch).toHaveBeenCalledWith({ type: actions.ADD_TODO, title: 'a' });
      expect(localStorage.setTodos).toHaveBeenCalledWith(nextState.todos);
    });

    test('throws error if setTodos throws error', () => {
      const nextState = { todos: [{ title : 'a', completed: false }] };

      getState.mockReturnValue(nextState);
      localStorage.setTodos.mockImplementation(() => {
        throw new Error('jaj');
      });

      expect(() =>{
        thunks.addTodo('a')(dispatch, getState, localStorage);
      }).toThrow();
    })
  });

  describe('deleteTodo', () => {
    test('it deletes a todo from store and local storage', () => {
      const nextState = { todos: [{ title : 'a', completed: false }] };

      getState.mockReturnValue(nextState);
      thunks.deleteTodo(0)(dispatch, getState, localStorage);
      expect(dispatch).toHaveBeenCalledWith({ type: actions.DELETE_TODO, index: 0 });
      expect(localStorage.setTodos).toHaveBeenCalledWith(nextState.todos);
    });
  });

  describe('toggleTodo', () => {
    test('it toggles the state of a todo in store and local storage', () => {
      const nextState = { todos: [{ title : 'a', completed: true }] };

      getState.mockReturnValue(nextState);
      thunks.toggleTodo(0)(dispatch, getState, localStorage);
      expect(dispatch).toHaveBeenCalledWith({ type: actions.TOGGLE_TODO, index: 0 });
      expect(localStorage.setTodos).toHaveBeenCalledWith(nextState.todos);
    });
  });

  describe('clearAllTodos', () => {
    test('it clears all todos from store and local storage', () => {
      const nextState = [];

      getState.mockReturnValue(nextState);
      thunks.clearAllTodo()(dispatch, getState, localStorage);
      expect(dispatch).toHaveBeenCalledWith({ type: actions.CLEAR_ALL_TODO });
      expect(localStorage.setTodos).toHaveBeenCalledWith(nextState.todos);
    });
  });

  describe('patchTodo', () => {
    test('it modifies the title of a todo in store and local storage', () => {
      const nextState = { todos: [{ title : 'b', completed: true }] };

      getState.mockReturnValue(nextState);
      thunks.patchTodo(0, 'b')(dispatch, getState, localStorage);
      expect(dispatch).toHaveBeenCalledWith({ type: actions.PATCH_TODO, index: 0, title: 'b' });
      expect(localStorage.setTodos).toHaveBeenCalledWith(nextState.todos);
    });
  });
});
