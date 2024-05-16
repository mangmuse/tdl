import { FaTrash } from "react-icons/fa";
import styles from "./TodoItem.module.css";

export default function TodoItem({ todo, onUpdate, onDelete }) {
  const { id, isDone, text } = todo;
  const handleChange = (e) => onUpdate({ ...todo, isDone: e.target.checked });

  const handleDelete = () => onDelete(todo);
  return (
    <li className={styles.todoItem}>
      <input
        className={styles.checkbox}
        onChange={handleChange}
        id={id}
        type="checkbox"
        checked={isDone}
      />
      <label
        className={`${styles.text} ${isDone ? styles.isDone : ""}`}
        htmlFor={id}
        type="text"
      >
        {text}
      </label>
      <button className={styles.button} onClick={handleDelete}>
        <FaTrash />
      </button>
    </li>
  );
}
