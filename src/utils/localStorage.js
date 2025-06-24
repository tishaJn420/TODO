export const setTodo = (todos) => {
  if (!Array.isArray(todos)) return;
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const getTodo = () => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
};

export const getCurrentUserLocalStorage = () => {
  const user = localStorage.getItem("currentUser");
  return user ? JSON.parse(user) : null;
};