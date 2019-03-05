import * as selectors from '../selectors';

describe('selectors', () => {
  describe('getSearchValue', () => {
    test('it returns the search value', () => {
      const state = { search: 'abc' };
      const result = selectors.getSearchValue(state);
      expect(result).toBe('abc');
    });
  });

  describe('getNumberOfCompleted', () => {
    test('it returns the num of completed', () => {
      const state = { todos: [{ title: 'a', completed: false }, { title: 'b', completed: true }] };
      const result = selectors.getNumberOfCompleted(state);
      expect(result).toBe(1);
    });
  });

  describe('getFilterTodos', () => {
    const todos = [{ title: 'a', completed: false }, { title: 'b', completed: true }];

    test('it returns all of the todos if there is no search keyword', () => {
      const state = { search: '', todos };
      const result = selectors.getFilterTodos(state);
      expect(result).toBe(state.todos);
    });

    test('it returns the filtered todos', () => {
      const state = { search: 'a', todos };
      const result = selectors.getFilterTodos(state);
      expect(result).toEqual([state.todos[0]]);
    });

    test('it returns nothing if there is no match', () => {
      const state = { search: 'abc', todos };
      const result = selectors.getFilterTodos(state);
      expect(result).toEqual([]);
    });
  });
});
