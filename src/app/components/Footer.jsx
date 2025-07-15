"use client";

import React from "react";
import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { useSelector } from "react-redux";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const theme = useSelector((state) => state.theme.mode);

  return (
    <footer
      className={styles.footer}
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#000000ff",
      }}
    >
      <div
        className={styles.container}
        style={{
          backgroundColor: theme === "light" ? "#fff" : "#000000ff",
          color: theme === "light" ? "#000000ff" : "#fff",
        }}
      >
        <div className={styles.links}>
          <a
            href="https://github.com/Mohansai-M"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mohansaim20/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Mohansai Mallineni
        </p>
        <button onClick={scrollToTop} className={styles.scrollTop}>
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
