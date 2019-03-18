import reducer from '../reducers';
import * as actions from '../actions';
import { createMemoryHistory } from 'history';

describe('reducers', () => {
  const todos = [
    { id: 1, title: 'a', completed: false },
    { id: 2, title: 'b', completed: true }
  ];
  const history = createMemoryHistory();

  describe('todos', () => {
    test('it returns an empty array as deault state after init the store', () => {
      const nextState = reducer(history)(undefined, { type: '@@redux/INIT' });
      expect(nextState).toHaveProperty('search', '');
      expect(nextState).toHaveProperty('todos', []);
    });

    test('add todo', () => {
      const state = { search: '', todos: [] };
      const newTodo = { id: 1, title: 'a', completed: false };

      const nextState = reducer(history)(state, actions.resolveTodo(newTodo));
      expect(nextState.todos).toHaveLength(1);
      expect(nextState.todos).toContainEqual(newTodo);
    });

    test('resolve todos', () => {
      const state = { search: '', todos };
      const nextState = reducer(history)(state, actions.resolveTodos(todos));
      expect(nextState.todos).toHaveLength(2);
      expect(nextState.todos).toMatchObject(todos);
    });

    test('modify todo', () => {
      const modifiedIndex = 0;
      const modifiedTitle = 'abc';
      const modifiedTodo = {
        ...todos[modifiedIndex],
        title: modifiedTitle
      };
      const state = { search: '', todos };
      const nextState = reducer(history)(
        state,
        actions.resolveTodo(modifiedTodo)
      );
      expect(nextState.todos).toHaveLength(2);

      const expectedTodos = todos.map(todo => ({ ...todo }));
      expectedTodos[modifiedIndex].title = modifiedTitle;
      expect(nextState.todos).toMatchObject(expectedTodos);
    });
  });

  describe('search', () => {
    test('set search query', () => {
      const searchQuery = 'labda';
      const state = { search: '', todos };
      const nextState = reducer(history)(
        state,
        actions.setSearchQuery(searchQuery)
      );

      expect(nextState.search).toBe(searchQuery);
    });
  });
});
