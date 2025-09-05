"use client";

import React, { useRef } from "react";
import styles from "./AwardsSection.module.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const awards = [
  {
    title: "🏆 Working as One",
    date: "April 2024",
    description:
      "Awarded for exceptional cross-team collaboration and delivering the NFFL and Agent ID features under tight timelines at DIRECTV.",
  },
  {
    title: "🏆 Doing the Right Thing",
    date: "September 2024",
    description:
      "Recognized for taking full ownership of the MDU-DTH commitment flow and contributing clean, scalable code while mentoring junior developers.",
  },
];

const AwardsSection = () => {
  const theme = useSelector((state) => state.theme.mode);
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className={styles.awards}>
      <div className={styles.ambient}></div>

      <motion.h2
        className={`${styles.heading} ${
          theme === "light" ? styles.lightText : styles.darkText
        }`}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Honors & High Fives
      </motion.h2>

      <div className={styles.grid}>
        {awards.map((award, idx) => (
          <motion.div
            key={idx}
            className={styles.tile}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: idx * 0.15,
            }}
            whileHover={{
              scale: 1.05,
              y: -8,
            }}
          >
            <h3 className={styles.title}>{award.title}</h3>
            <span className={styles.date}>{award.date}</span>
            <p className={styles.desc}>{award.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
