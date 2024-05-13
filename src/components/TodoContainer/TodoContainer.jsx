import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoContainer.module.css";
export default function TodoList({ todos, onUpdate, onDelete }) {
  const [isVisible, setIsVisible] = useState({
    pendingTodos: true,
    completedTodos: true,
  });
  const [pendingTodos, completedTodos] = getFilteredTodos(todos);
  const handleToggle = (key) => {
    setIsVisible((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className={styles.listContainer}>
      <ul className={styles.pendingTodos}>
        {pendingTodos.length > 0 && (
          <button
            className={styles.toggleBtn}
            onClick={() => handleToggle("pendingTodos")}
          >
            진행중 {pendingTodos.length}
          </button>
        )}
        {isVisible.pendingTodos &&
          pendingTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))}
      </ul>
      <ul className={styles.list}>
        {completedTodos.length > 0 && (
          <button
            className={styles.toggleBtn}
            onClick={() => handleToggle("completedTodos")}
          >
            완료 {completedTodos.length}
          </button>
        )}
        {isVisible.completedTodos &&
          completedTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))}
      </ul>
    </section>
  );
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
