import reducer from '../reducers';
import * as actions from '../actions';

describe('reducers', () => {
  const todos = [{ title: 'a', completed: false }, { title: 'b', completed: true }];

  describe('todos', () => {
    test('it returns an empty array as deault state after init the store', () => {
      const nextState = reducer(null)(undefined, { type: '@@redux/INIT' });
      expect(nextState).toEqual({ search: '', todos: [] });
    });

    test('add todo', () => {
      const state = { search: '', todos: [] };
      const nextState = reducer(null)(state, actions.addTodo('a'));
      expect(nextState.todos).toHaveLength(1);
      expect(nextState.todos).toContainEqual({ title: 'a', completed: false });
    });

    test('set todos', () => {
      const state = { search: '', todos  };
      const nextState = reducer(null)(state, actions.setTodos(todos));
      expect(nextState.todos).toHaveLength(2);
      expect(nextState.todos).toMatchObject(todos);
    });

    test('toggle todo', () => {
      const modifiedIndex = 0;
      const state = { search: '', todos  };
      const nextState = reducer(null)(state, actions.toggleTodo(modifiedIndex));
      expect(nextState.todos).toHaveLength(2);

      const expectedTodos = todos.map(todo => ({ ...todo }));
      expectedTodos[modifiedIndex].completed = !expectedTodos[modifiedIndex].completed;
      expect(nextState.todos).toMatchObject(expectedTodos);
    });

    test('modify todo', () => {
      const modifiedIndex = 1;
      const modifiedTitle = 'labda';
      const state = { search: '', todos };
      const nextState = reducer(null)(state, actions.patchTodo(modifiedIndex, modifiedTitle));
      expect(nextState.todos).toHaveLength(2);

      const expectedTodos = todos.map(todo => ({ ...todo }));
      expectedTodos[modifiedIndex].title = modifiedTitle;
      expect(nextState.todos).toMatchObject(expectedTodos);
    });

    test('delete todo', () => {
      const deletedIndex = 0;
      const state = { search: '', todos };
      const nextState = reducer(null)(state, actions.deleteTodo(deletedIndex));
      expect(nextState.todos).toHaveLength(1);

      const expectedTodos = todos.filter((_, index) => index !== deletedIndex);
      expect(nextState.todos).toMatchObject(expectedTodos);
    });
  });

  describe('search', () => {
    test('set search query', () => {
      const searchQuery = 'labda';
      const state = { search: '', todos };
      const nextState = reducer(null)(state, actions.setSearchQuery(searchQuery));

      expect(nextState.search).toBe(searchQuery);
    })
  })
});
