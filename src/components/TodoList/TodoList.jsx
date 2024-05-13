import React, { useState } from "react";
import AddTodoForm from "../AddTodoForm/AddTodoForm";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const handleAdd = (newTodo) => setTodos((prev) => [...prev, newTodo]);
  return (
    <section>
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
        <ul></ul>
      </div>
      <AddTodoForm onAdd={handleAdd} />
    </section>
  );
}
