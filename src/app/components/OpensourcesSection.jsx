"use client";

import React from "react";
import styles from "./ProjectsSection.module.css";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";

const contributions = [
  {
    title: "🌐 Language Selector Refactor (React UI Component)",
    description:
      "Contributed to an open-source multilingual dropdown component by cleaning up unused items, aligning with final supported locales, and ensuring proper flag rendering and accessibility. PR reviewed and merged by a senior engineer.",
    tech: ["React", "Material UI", "i18n", "Accessibility"],
    github: "https://github.com/org-or-user/repo-name/pull/1234",
  },
  // You can add more contributions here in future
];

const OpenSourceSection = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <section
      id="opensource"
      className={styles.projects}
      style={{ backgroundColor: theme === "light" ? "#f9f9f9" : "#0e0e0e" }}
    >
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2
          className={styles.heading}
          style={{ color: theme === "light" ? "#222" : "#fff" }}
        >
          Open Source Contributions
        </h2>

        <div className={styles.grid}>
          {contributions.map((item, index) => (
            <div
              key={index}
              className={styles.card}
              style={{
                backgroundColor: theme === "light" ? "white" : "#1a1a1a",
                borderColor: theme === "light" ? "#e3e3e3" : "#2a2a2a",
                boxShadow:
                  theme === "light"
                    ? "0 4px 10px rgba(0,0,0,0.06)"
                    : "0 4px 10px rgba(255,255,255,0.04)",
              }}
            >
              <h3
                className={styles.title}
                style={{
                  color: theme === "light" ? "#1a1a1a" : "#eee",
                }}
              >
                {item.title}
              </h3>
              <p
                className={styles.description}
                style={{ color: theme === "light" ? "#444" : "#ccc" }}
              >
                {item.description}
              </p>
              <ul className={styles.tech}>
                {item.tech.map((tech, i) => (
                  <li
                    key={i}
                    style={{
                      backgroundColor: theme === "light" ? "#eef1f6" : "#333",
                      color: theme === "light" ? "#333" : "#ddd",
                    }}
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className={styles.links}>
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: theme === "light" ? "#1a73e8" : "#80bfff",
                    }}
                  >
                    <FaGithub /> Contribution
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OpenSourceSection;
