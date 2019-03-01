import { createSelector } from 'reselect';

const getSearchValue = state => state.search;
const getTodos = state => state.todos;

export const getFilterTodos = createSelector([ getSearchValue, getTodos ],
  (searchValue, todos) => todos.filter(todo => todo.title.includes(searchValue))
);

export const getNumberOfTodos = createSelector(getFilterTodos, todos => todos.length);

export const getNumberOfCompleted = createSelector(getFilterTodos, todos =>
  todos.reduce((accumulator, currentValue) => {
    return currentValue.completed ? accumulator + 1 : accumulator;
  }, 0)
);