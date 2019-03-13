import { createSelector } from 'reselect';

export const getSearchValue = state => state.search;

export const getTodos = state => state.todos;

export const getTodoById = (id, state) =>
  state.todos.find(todo => todo.id === id);

export const getFilterTodos = createSelector(
  [getSearchValue, getTodos],
  (searchValue, todos) =>
    !searchValue
      ? todos
      : todos.filter(todo => todo.title.includes(searchValue))
);

export const getNumberOfTodos = createSelector(
  getFilterTodos,
  todos => todos.length
);

export const getNumberOfCompleted = createSelector(
  getFilterTodos,
  todos =>
    todos.reduce((accumulator, currentValue) => {
      return currentValue.completed ? accumulator + 1 : accumulator;
    }, 0)
);
