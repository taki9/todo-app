import * as selectors from '../selectors';

describe('selectors', () => {
  const todos = [
    { title: 'a', completed: false },
    { title: 'b', completed: true }
  ];

  describe('getSearchValue', () => {
    test('it returns the search value', () => {
      const state = { search: 'abc' };
      const result = selectors.getSearchValue(state);
      expect(result).toBe('abc');
    });
  });

  describe('getNumberOfTodos', () => {
    test('it returns the num of todos', () => {
      const state = { todos };
      const result = selectors.getNumberOfTodos(state);
      expect(result).toBe(2);
    });
  });

  describe('getNumberOfCompleted', () => {
    test('it returns the num of completed', () => {
      const state = { todos };
      const result = selectors.getNumberOfCompleted(state);
      expect(result).toBe(1);
    });
  });

  describe('getFilterTodos', () => {
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
