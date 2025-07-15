"use client";

import React from "react";
import styles from "./AwardsSection.module.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const awards = [
  {
    title: "🏆 Working as One",
    date: "April 2024",
    description:
      "Awarded for exceptional cross-team collaboration and delivering the NFFL and Agent ID features under tight timelines at DIRECTV, driving production success in the USF order flow.",
  },
  {
    title: "🏆 Doing the Right Thing",
    date: "September 2024",
    description:
      "Recognized for taking full ownership of the MDU-DTH commitment flow and contributing clean, scalable code — while mentoring junior developers and supporting release quality.",
  },
];


const AwardsSection = () => {
   const theme = useSelector((state) => state.theme.mode);


  return (
    <section
      id="awards"
      className={styles.awards}
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
          Awards
        </h2>
        <div className={styles.list}>
          {awards.map((award, index) => (
            <div
              key={index}
              className={styles.card}
              style={{
                backgroundColor: theme === "light" ? "#f7f7f7" : "#1a1a1a",
                boxShadow:
                  theme === "light"
                    ? " 0 4px 10px rgba(0,0,0,0.05)"
                    : "rgba(255,255,255,0.05)",
              }}
            >
              <h3
                className={styles.title}
                style={{
                  color: theme === "light" ? "#1a1a1a" : "#eee",
                }}
              >
                {award.title}
              </h3>
              <span
                className={styles.date}
                style={{
                  color: theme === "light" ? "#888" : "#bbb",
                }}
              >
                {award.date}
              </span>
              <p
                className={styles.desc}
                style={{ color: theme === "light" ? "#444" : "#ccc" }}
              >
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AwardsSection;
