const todoKey = 'todos';


export const getTodos = () => {
  let todos = localStorage.getItem(todoKey)

  if (todos === null) {
    return [];
  }

  return JSON.parse(todos);
}

export const pushTodo = (title) => {
  const todos = getTodos() || []

  todos.push({ title, completed: false });
  localStorage.setItem(todoKey, JSON.stringify(todos));
}

export const clearTodos = () => {
  localStorage.setItem(todoKey, JSON.stringify([]));
}

export const markAsCompleted = (completedIdx) => {
  const todos = getTodos();
  const todosAfter = todos.map((todo, index) =>
    index === completedIdx
      ? { ...todo, completed: !todo.completed }
      : todo
  );

  localStorage.setItem(todoKey, JSON.stringify(todosAfter));
}

export const removeTodo =  (deleteIdx) => {
  const todos = getTodos();
  const todosAfterDelete = todos.filter((_, index) => index !== deleteIdx);

  localStorage.setItem(todoKey, JSON.stringify(todosAfterDelete));
}

export const editTodo = (editIdx, newTitle) => {
  const todos = getTodos();
  const todosAfterEdit = todos.map((todo, index) =>
    index === editIdx
      ? { ...todo, title: newTitle }
      : todo
  );

  localStorage.setItem(todoKey, JSON.stringify(todosAfterEdit));
}
