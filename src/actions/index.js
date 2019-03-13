import * as actionNames from './actionNames';

export const setSearchQuery = query => ({
  type: actionNames.SET_SEARCH_QUERY,
  query
});

export const resolveTodo = todo => ({
  type: actionNames.RESOLVE_TODO,
  todo
});

export const resolveTodos = todos => ({
  type: actionNames.RESOLVE_TODOS,
  todos
});
