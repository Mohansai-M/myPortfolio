"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/ThemeSlice";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      onClick={handleToggle}
      className={styles.toggle}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      style={{
        fontSize: "1.6rem",
        transition: "transform 0.2s ease",
        display: "inline-block",
      }}
    >
      {theme === "dark" ? "🌞" : "🌚"}
    </button>
  );
};

export default ThemeToggle;
