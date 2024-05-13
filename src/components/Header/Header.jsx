import { useContext } from "react";
import styles from "./Header.module.css";
import { DarkModeContext } from "../../context/DarkModeContext";
import { HiMoon, HiSun } from "react-icons/hi";

export default function Header() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <header className={styles.header}>
      <button className={styles.toggleBtn} onClick={toggleDarkMode}>
        <span>
          {!darkMode && <HiMoon />}
          {darkMode && <HiSun />}
        </span>
      </button>
      <h1 className={styles.title}>Todo List</h1>
    </header>
  );
}
