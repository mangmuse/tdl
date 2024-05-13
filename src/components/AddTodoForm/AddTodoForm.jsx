import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import styles from "./AddTodoForm.module.css";

export default function AddTodoForm({ onAdd }) {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      onAdd({ id: uuid(), text, status: "pending" });
      setText("");
    }
  };
  const handleChange = (e) => setText(e.target.value);
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={text}
        onChange={handleChange}
      />
      <button className={styles.button}>추가</button>
    </form>
  );
}
