import reducer from '../reducers';
import * as actions from '../actions';

describe('reducers', () => {
  describe('todos', () => {
    test('it returns an empty array as deault state after init the store', () => {
      const nextState = reducer(undefined, { type: '@@redux/INIT' });
      expect(nextState).toEqual({ search: '', todos: [] });
    });

    test('add todo', () => {
      const state = { search: '', todos: [] };
      const nextState = reducer(state, actions.addTodo('a'));
      expect(nextState.todos).toHaveLength(1);
      expect(nextState.todos).toContainEqual({ title: 'a', completed: false });
    });
  });
});
