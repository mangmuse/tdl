import { useState } from "react";

export default function useFilteredTodos(todos) {
  const [isVisible, setIsVisible] = useState({
    pendingTodos: true,
    completedTodos: true,
  });

  const [pendingTodos, completedTodos] = getFilteredTodos(todos);

  const handleToggle = (key) => {
    setIsVisible((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return { pendingTodos, completedTodos, isVisible, handleToggle };
}

function getFilteredTodos(todos) {
  return todos.reduce(
    ([pendingTodos, completedTodos], todo) => {
      if (todo.status === "pending") {
        pendingTodos.push(todo);
      } else {
        completedTodos.push(todo);
      }
      return [pendingTodos, completedTodos];
    },
    [[], []]
  );
}
