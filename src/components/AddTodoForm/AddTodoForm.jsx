import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export default function AddTodoForm({ onAdd }) {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      onAdd({ id: uuid, text, status: "pending" });
      setText("");
    }
  };
  const handleChange = (e) => setText(e.target.value);
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <button>등록</button>
    </form>
  );
}
