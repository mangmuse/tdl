import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <button>🌙</button>
      <h1 className={styles.title}>Todo List</h1>
    </header>
  );
}
