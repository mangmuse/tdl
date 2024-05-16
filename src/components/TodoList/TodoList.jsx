import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

export default function TodoList({
  todos,
  isDone,
  isVisible,
  onToggle,
  actions,
}) {
  const toggleBtnText = isDone ? "완료됨" : "진행중";
  return (
    <ul className={styles.todos}>
      {todos.length > 0 && (
        <button className={styles.toggleBtn} onClick={onToggle}>
          {toggleBtnText} {todos.length}
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
