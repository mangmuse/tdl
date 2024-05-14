import { useState, useEffect } from "react";

export default function useTodos() {
  const [todos, setTodos] = useState(getTodosFromLocalStorage());

  const handleAdd = (newTodo) => setTodos((prev) => [...prev, newTodo]);
  const handleUpdate = (updated) =>
    setTodos((todos) =>
      todos.map((todo) => (updated.id === todo.id ? updated : todo))
    );
  const handleDelete = (toBeDeleted) =>
    setTodos((todos) => todos.filter((todo) => toBeDeleted.id !== todo.id));

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return {
    todos,
    handleAdd,
    handleUpdate,
    handleDelete,
  };
}

function getTodosFromLocalStorage() {
  const todos = JSON.parse(localStorage.getItem("todos"));
  return todos ? todos : [];
}
