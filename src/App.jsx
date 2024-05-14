import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import Header from "./components/Header/Header";
import TodoContainer from "./components/TodoContainer/TodoContainer";
import { DarkModeProvider } from "./context/DarkModeContext";
import useTodos from "./hooks/useTodos";

export default function App() {
  const { todos, handleAdd, handleUpdate, handleDelete } = useTodos();

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
