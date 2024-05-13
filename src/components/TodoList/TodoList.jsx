import React, { useState } from "react";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import Todo from "../Todo/Todo";

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
    <section>
      <div>
        <ul>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </ul>
        <ul></ul>
      </div>
      <AddTodoForm onAdd={handleAdd} />
    </section>
  );
}
