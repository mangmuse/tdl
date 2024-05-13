import React, { useState } from "react";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAdd = (newTodo) => setTodos((prev) => [...prev, newTodo]);
  const handleUpdate = (updated) =>
    setTodos((todos) =>
      todos.map((todo) => (updated.id === todo.id ? updated : todo))
    );
  const handleDelete = (toBeDeleted) =>
    setTodos((todos) => todos.filter((todo) => toBeDeleted.id !== todo.id));
  return (
    <section className={styles.container}>
      <div className={styles.listBox}>
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </ul>
        <ul className={styles.list}></ul>
      </div>
      <AddTodoForm onAdd={handleAdd} />
    </section>
  );
}
