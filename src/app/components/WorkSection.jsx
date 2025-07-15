"use client";

import React from "react";
import styles from "./WorkSection.module.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const experiences = [
  {
    company: "DIRECTV (Client – via Cognizant)",
    role: "Frontend Developer",
    bullets: [
      "Refactored CMS API logic to improve performance and enable reusable component rendering.",
      "Re-architected frontend API headers to align with evolving business rules and downstream services.",
      "Implemented role-based permissions for NFFL order editing, enhancing user-specific access control.",
      "Developed PNP messaging logic by integrating CMS-based time-sensitive alerts within the UI.",
      "Owned and delivered the MDU-DTH module: enabled commitment duration filters (12, 24, month-to-month) with global data propagation and comparison logic.",
      "Contributed to RoadRunner payload structuring based on order type, enhancing flow accuracy and UI reliability.",
      "Collaborated on FTC 3D Framework implementation, transforming and mapping key data fields (`description`, `displayName`, `disclosure`) throughout the app.",
    ],
  },
  {
    company: "CUNA Mutual (Client – via Cognizant)",
    role: "Frontend Developer",
    duration: "Oct 2021 – Jan 2023",
    bullets: [
      "Modernized a legacy insurance application into a responsive React-based web platform.",
      "Developed dynamic UI components with React and Context API to support critical product workflows.",
      "Adapted quickly to complex business logic and participated in high-impact feature delivery in Agile teams.",
    ],
  },
  {
    company: "Cognizant Internship",
    role: "Intern Developer",
    duration: "Jan 2021 – Jun 2021",
    bullets: [
      "Built a full-stack eBookstore using the MERN stack with user authentication, product listing, and admin features.",
      "Practiced REST API integration, component-driven development, and state handling in a team environment.",
    ],
  },
];


const WorkSection = () => {
   const theme = useSelector((state) => state.theme.mode);
  return (
    <section
      id="experience"
      className={styles.experience}
      style={{ backgroundColor: theme === "light" ? "#fff" : "#000000ff" }}
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
          Experience
        </h2>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`${styles.item} ${
                theme === "dark" ? styles.itemDark : styles.itemLight
              }`}
            >
              <div className={styles.meta}>
                <h3
                  className={styles.role}
                  style={{
                    color: theme === "light" ? "#1a1a1a" : "#eee",
                  }}
                >
                  {exp.role}
                </h3>
                <span
                  className={styles.company}
                  style={{
                    color: theme === "light" ? "#444" : "#ccc",
                  }}
                >
                  {exp.company}
                </span>
              </div>
              <ul
                className={styles.bullets}
                style={{
                  color: theme === "light" ? "#444" : "#ccc",
                }}
              >
                {exp.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WorkSection;
