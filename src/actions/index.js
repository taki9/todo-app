export const addTodo = title => ({
  type: 'ADD_TODO',
  title
})

export const toggleTodo = title => ({
  type: 'TOGGLE_TODO',
  title
})

export const patchTodo = (title, previousTitle) => ({
  type: 'PATCH_TODO',
  title,
  previousTitle
})

export const deleteTodo = title => ({
  type: 'DELETE_TODO',
  title
})

export const clearAllTodo = () => ({
  type: 'CLEAR_ALL_TODO'
})