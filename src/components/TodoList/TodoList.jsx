import React, { useEffect, useState } from "react";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

export default function TodoList() {
  const [todos, setTodos] = useState(getTodosFromLocalStorage);
  const [isVisible, setIsVisible] = useState({
    pendingTodos: true,
    completedTodos: true,
  });

  const handleToggle = (key) => {
    setIsVisible((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  const handleAdd = (newTodo) => setTodos((prev) => [...prev, newTodo]);
  const handleUpdate = (updated) =>
    setTodos((todos) =>
      todos.map((todo) => (updated.id === todo.id ? updated : todo))
    );
  const handleDelete = (toBeDeleted) =>
    setTodos((todos) => todos.filter((todo) => toBeDeleted.id !== todo.id));
  const [pendingTodos, completedTodos] = getFilteredTodos(todos);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <section className={styles.container}>
      <div className={styles.listBox}>
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
                onUpdate={handleUpdate}
                onDelete={handleDelete}
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
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            ))}
        </ul>
      </div>
      <AddTodoForm onAdd={handleAdd} />
    </section>
  );
}

function getTodosFromLocalStorage() {
  const todos = JSON.parse(localStorage.getItem("todos"));
  return todos ? todos : [];
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
