"use client";

import React from "react";
import styles from "./HeroSection.module.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const HeroSection = () => {
  const theme = useSelector((state) => state.theme.mode);
  

  return (
    <section
      className={styles.hero}
      style={{ backgroundColor: theme === "light" ? "#fdfdfd" : "#000000ff" }}
    >
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          className={styles.name}
          style={{ color: theme === "light" ? "#444" : "#ddd" }}
        >
          Mohansai Mallineni
        </h1>
        <h2
          className={styles.title}
          style={{ color: theme === "light" ? "#555" : "#bbb" }}
        >
          Full Stack Developer — React / Next.js / TypeScript / MERN
        </h2>

        <p
          className={styles.description}
          style={{ color: theme === "light" ? "#444" : "#ddd" }}
        >
          Frontend-focused full stack engineer specializing in scalable React &
          Next.js applications — with hands-on production experience in
          TypeScript and the MERN stack. I craft performant, accessible, and
          modern UIs that deliver real business value.
        </p>
        <div className={styles.cta}>
          <a href="#projects" className={styles.button}>
            View Projects
          </a>
          <a
            href="#contact"
            className={`${styles.link} ${
              theme === "dark" ? styles.darkLink : styles.lightLink
            }`}
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
