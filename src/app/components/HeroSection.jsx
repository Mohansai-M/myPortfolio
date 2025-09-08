"use client";

import React, { useEffect } from "react";
import styles from "./HeroSection.module.css";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useSelector } from "react-redux";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const HeroSection = () => {
  const theme = useSelector((state) => state.theme.mode);

  // Mouse parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      x.set(e.clientX - window.innerWidth / 2);
      y.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <section className={styles.hero} data-theme={theme}>
      <div className={styles.background}></div>

      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ rotateX, rotateY }}
      >
        {/* Glowing Duplicate */}
        <motion.h1 className={styles.name} variants={itemVariants}>
          <span className={styles.glow}>Mohansai Mallineni</span>
        </motion.h1>

        {/* Typewriter/Slide Title */}
        <motion.h2 className={styles.title} variants={itemVariants}>
          Full-Stack Developer • React / Next.js / TypeScript / MERN
        </motion.h2>

        <motion.p className={styles.description} variants={itemVariants}>
          Frontend-focused full-stack engineer with production experience in
          React, Next.js, TypeScript, and the MERN stack. I build scalable,
          performant, and accessible applications with modern UIs that create
          real business impact.
        </motion.p>

        <motion.div className={styles.cta} variants={itemVariants}>
          <motion.a
            href="#projects"
            className={styles.button}
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className={styles.link}
            whileHover={{
              scale: 1.05,
              boxShadow: "none"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
