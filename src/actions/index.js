import * as actionNames from './actionNames';

export const setTodos = todos => ({
  type: actionNames.SET_TODOS,
  todos
})

export const addTodo = title => ({
  type: actionNames.ADD_TODO,
  title
})

export const toggleTodo = index => ({
  type: actionNames.TOGGLE_TODO,
  index
})

export const patchTodo = (index, title) => ({
  type: actionNames.PATCH_TODO,
  index,
  title
})

export const deleteTodo = index => ({
  type: actionNames.DELETE_TODO,
  index
})

export const clearAllTodo = () => ({
  type: actionNames.CLEAR_ALL_TODO
})

export const setSearchQuery = query => ({
  type: actionNames.SET_SEARCH_QUERY,
  query
})