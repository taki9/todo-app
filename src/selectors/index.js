import { createSelector } from 'reselect';

const getSearchValue = state => state.search;
const getTodos = state => state.todos;

export const filterTodos = createSelector([ getSearchValue, getTodos ],
  (searchValue, todos) => todos.filter(todo => todo.title.includes(searchValue))
);

export const getNumberOfTodos = createSelector(filterTodos, todos => todos.length);

export const getNumberOfCompleted = createSelector(filterTodos, todos =>
  todos.reduce((accumulator, currentValue) => {
    return currentValue.completed ? accumulator + 1 : accumulator;
  }, 0)
);