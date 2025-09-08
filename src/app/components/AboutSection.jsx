"use client";

import React from "react";
import styles from "./AboutSection.module.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

const AboutSection = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <section id="about" className={`${styles.about} ${styles[theme]}`}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className={styles.heading} variants={itemVariants}>
          Behind the Screen
        </motion.h2>

        <motion.p className={styles.text} variants={itemVariants}>
          Building <span className={styles.highlight}>scalable</span> and&nbsp;
          <span className={styles.highlight}>modern</span> web experiences that
          perform beautifully. I'm Mohansai Mallineni, a full-stack developer
          passionate about creating clean, fast apps and exploring the latest
          tech.
        </motion.p>

        <motion.p className={styles.text} variants={itemVariants}>
          I dive into open source, experiment with AI, and constantly find new
          ways to make digital experiences smoother, smarter, and more
          impactful.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
