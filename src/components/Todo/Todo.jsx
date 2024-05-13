import React from "react";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, status, text } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "pending";
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li>
      <input
        onChange={handleChange}
        id={id}
        type="checkbox"
        checked={status === "completed"}
      />
      <label htmlFor={id} type="text">
        {text}
      </label>
      <button onClick={handleDelete}>삭제</button>
    </li>
  );
}
