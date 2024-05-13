import React from "react";
import { FaTrash } from "react-icons/fa";
import styles from "./TodoItem.module.css";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, status, text } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "pending";
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li className={styles.todoItem}>
      <input
        className={styles.checkbox}
        onChange={handleChange}
        id={id}
        type="checkbox"
        checked={status === "completed"}
      />
      <label className={styles.text} htmlFor={id} type="text">
        {text}
      </label>
      <button className={styles.button} onClick={handleDelete}>
        <FaTrash />
      </button>
    </li>
  );
}
