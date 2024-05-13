import { useEffect, useState } from "react";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import Header from "./components/Header/Header";
import TodoContainer from "./components/TodoContainer/TodoContainer";
import { DarkModeProvider } from "./context/DarkModeContext";

export default function App() {
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
  return (
    <>
      <DarkModeProvider>
        <Header />
      </DarkModeProvider>
      <TodoContainer
        todos={todos}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
      <AddTodoForm onAdd={handleAdd} />
    </>
  );
}

function getTodosFromLocalStorage() {
  const todos = JSON.parse(localStorage.getItem("todos"));
  return todos ? todos : [];
}
