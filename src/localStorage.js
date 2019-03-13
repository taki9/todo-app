const todoKey = 'todos';

export const getTodos = () => {
  let todos = localStorage.getItem(todoKey);

  return todos ? JSON.parse(todos) : [];
};

export const setTodos = todos => {
  localStorage.setItem(todoKey, JSON.stringify(todos));
};
