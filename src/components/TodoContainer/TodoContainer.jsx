import useFilteredTodos from "../../hooks/useFilteredTodos";
import styles from "./TodoContainer.module.css";
import TodoList from "../TodoList/TodoList";

export default function TodoContainer({ todos, onUpdate, onDelete }) {
  const { pendingTodos, completedTodos, isVisible, handleToggle } =
    useFilteredTodos(todos);
  return (
    <section className={styles.listContainer}>
      <TodoList
        todos={pendingTodos}
        isDone={false}
        isVisible={isVisible.pendingTodos}
        onToggle={() => handleToggle("pendingTodos")}
        actions={{ onUpdate, onDelete }}
      />
      <TodoList
        todos={completedTodos}
        isDone={true}
        isVisible={isVisible.completedTodos}
        onToggle={() => handleToggle("completedTodos")}
        actions={{ onUpdate, onDelete }}
      />
    </section>
  );
}
