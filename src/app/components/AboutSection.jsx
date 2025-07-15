"use client";

import React from "react";
import styles from "./AboutSection.module.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const AboutSection = () => {
  const theme = useSelector((state) => state.theme.mode);

  
  return (
    <section
      id="about"
      className={styles.about}
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
          About Me
        </h2>
        <p
          className={styles.text}
          style={{ color: theme === "light" ? "#444" : "#ddd" }}
        >
          I'm Mohansai Mallineni, a frontend-focused full stack developer with
          4+ years of experience building enterprise-grade, performant web
          applications using React, Next.js, and TypeScript. I specialize in
          crafting scalable, maintainable UI systems with a strong eye for UX
          and accessibility.
        </p>

        <p
          className={styles.text}
          style={{ color: theme === "light" ? "#444" : "#ddd" }}
        >
          At DIRECTV and CUNA Mutual, I've delivered production-ready features
          in Agile teams—architecting CMS-driven components, refactoring API
          logic for reusability, and implementing role-based UI controls. I'm
          confident across the MERN stack (MongoDB, Express, React, Node.js)
          with hands-on experience in Redux, Material UI, and backend routing
          logic.
        </p>

        <p
          className={styles.text}
          style={{ color: theme === "light" ? "#444" : "#ddd" }}
        >
          Recognized with the <em>“Working as One”</em> and{" "}
          <em>“Doing the Right Thing”</em> awards for initiative, delivery
          ownership, and team collaboration. I take pride in clean code, clear
          thinking, and continuous learning — always shipping with purpose.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
