export const addTodo = title => ({
  type: 'ADD_TODO',
  title
})

export const toggleTodo = index => ({
  type: 'TOGGLE_TODO',
  index
})

export const patchTodo = (index, title) => ({
  type: 'PATCH_TODO',
  index,
  title
})

export const deleteTodo = index => ({
  type: 'DELETE_TODO',
  index
})

export const clearAllTodo = () => ({
  type: 'CLEAR_ALL_TODO'
})

export const setSearchQuery = query => ({
  type: 'SET_SEARCH_QUERY',
  query
})