import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

export default function TodoList({
  todos,
  title,
  isVisible,
  onToggle,
  actions,
}) {
  return (
    <ul className={styles.todos}>
      {todos.length > 0 && (
        <button className={styles.toggleBtn} onClick={onToggle}>
          {title} {todos.length}
        </button>
      )}
      {isVisible &&
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onUpdate={actions.onUpdate}
            onDelete={actions.onDelete}
          />
        ))}
    </ul>
  );
}
