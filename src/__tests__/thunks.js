import * as thunks from '../actions/thunks';
import * as actions from '../actions/actionNames';

describe('thunks', () => {
  const dispatch = jest.fn();
  const getState = jest.fn();
  const localStorage = {
    getTodos: jest.fn(),
    setTodos: jest.fn()
  };

  const api = {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn()
  }

  beforeEach(() => {
    dispatch.mockReset();
    getState.mockReset();

    localStorage.getTodos.mockReset();
    localStorage.setTodos.mockReset();

    api.get.mockReset();
    api.post.mockReset();
    api.put.mockReset();
    api.delete.mockReset();
  });

  describe('setInitialState', () => {
    test('it resolves todos from local storage', async () => {
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

      // localStorage.getTodos.mockReturnValue(todos);
      api.get.mockReturnValue(todos);

      await thunks.setInitialState()(dispatch, getState, api);
      expect(api.get).toHaveBeenCalledTimes(1);
      expect(api.get).toHaveReturnedWith(todos);
      // expect(localStorage.getTodos).toHaveBeenNthCalledWith(1);
      expect(dispatch).toHaveBeenCalledWith({ type: actions.RESOLVE_TODOS, todos });
    });
  });

  describe('addTodo', () => {
    test('it adds a todo into store and local storage', async () => {
      const newTodo = { title : 'a', completed: false };

      api.post.mockReturnValue(newTodo);

      await thunks.addTodo('a')(dispatch, getState, api);
      expect(api.post).toHaveBeenCalledWith(expect.any(String), { body: { title: 'a' } });
      expect(dispatch).toHaveBeenCalledWith({ type: actions.RESOLVE_TODO, todo: newTodo });
    });

    // test('throws error if setTodos throws error', () => {
    //   api.post.mockImplementation(() => {
    //     throw new Error('jaj');
    //   });

    //   expect(() =>{
    //     thunks.addTodo('a')(dispatch, getState, localStorage);
    //   }).toThrow();
    // })
  });

  describe('deleteTodo', () => {
    test('it deletes a todo from store and local storage', async () => {
      const nextState = [{ id: 1, title : 'a', completed: false }];

      api.delete.mockReturnValue(nextState);
      await thunks.deleteTodo(1)(dispatch, getState, api);

      expect(dispatch).toHaveBeenCalledWith({ type: actions.RESOLVE_TODOS, todos: nextState });
      // expect(localStorage.setTodos).toHaveBeenCalledWith(nextState.todos);
    });
  });

  describe('toggleTodo', () => {
    test('it toggles the state of a todo in store and local storage', async () => {
      const beforeState = { todos: [{ id: 1, title : 'a', completed: true }] };
      const afterState = { todos: [{ id: 1, title : 'a', completed: false }] };

      getState.mockReturnValue(beforeState);
      api.put.mockReturnValue({ ...beforeState.todos[0], completed: false });

      await thunks.toggleTodo(1)(dispatch, getState, api);
      expect(api.put).toHaveBeenCalledWith(expect.any(String), { body: { completed: !beforeState.todos[0].completed } });
      expect(dispatch).toHaveBeenCalledWith({ type: actions.RESOLVE_TODO, todo: afterState.todos[0] });
    });
  });

  describe('clearAllTodos', () => {
    test('it clears all todos from store and local storage', async () => {
      const nextState = [];

      api.delete.mockReturnValue([]);

      await thunks.clearAllTodo()(dispatch, getState, api);
      expect(dispatch).toHaveBeenCalledWith({ type: actions.RESOLVE_TODOS, todos: nextState });
    });
  });

  describe('patchTodo', () => {
    test('it modifies the title of a todo in store and local storage', async () => {
      const modifiedTitle = 'modified'
      const beforeState = { id: 1, title : 'b', completed: true };
      const afterState = { id: 1, title : modifiedTitle, completed: true };

      api.put.mockReturnValue({ ...beforeState, title: modifiedTitle });
      await thunks.patchTodo(1, modifiedTitle)(dispatch, getState, api);
      expect(api.put).toHaveBeenCalledWith(expect.any(String), { body: { title: modifiedTitle } });
      expect(dispatch).toHaveBeenCalledWith({ type: actions.RESOLVE_TODO, todo: afterState });
    });
  });
});
