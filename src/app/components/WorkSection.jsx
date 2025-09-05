"use client";

import React, { useRef } from "react";
import styles from "./WorkSection.module.css";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useSelector } from "react-redux";

const experiences = [
  {
    company: "DIRECTV (Client - via Cognizant)",
    role: "Full stack Developer",
    duration: "Jan 2023 - Present",
    bullets: [
      "Refactored CMS API logic to improve performance and enable reusable component rendering.",
      "Re-architected frontend API headers to align with evolving business rules and downstream services.",
      "Implemented role-based permissions for NFFL order editing, enhancing user-specific access control.",
      "Developed PNP messaging logic by integrating CMS-based time-sensitive alerts within the UI.",
      "Owned and delivered the MDU-DTH module: enabled commitment duration filters with global data propagation.",
      "Contributed to RoadRunner payload structuring based on order type, enhancing flow accuracy and UI reliability.",
      "Collaborated on FTC 3D Framework implementation, transforming and mapping key data fields throughout the app.",
    ],
  },
  {
    company: "CUNA Mutual (Client - via Cognizant)",
    role: "Frontend Developer",
    duration: "Aug 2021 - Jan 2023",
    bullets: [
      "Modernized a legacy insurance application into a responsive React-based web platform.",
      "Developed dynamic UI components with React and Context API to support critical product workflows.",
      "Adapted quickly to complex business logic and participated in high-impact feature delivery in Agile teams.",
    ],
  },
  {
    company: "Cognizant Internship",
    role: "Intern",
    duration: "Jan 2021 - Jun 2021",
    bullets: [
      "Built a full-stack eBookstore using the MERN stack with user authentication and admin features.",
      "Practiced REST API integration, component-driven development, and state handling in a team environment.",
    ],
  },
];

// Framer Motion Variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 } },
};

const bulletsContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const bulletItem = {
  hidden: { opacity: 0, x: 20, scale: 0.95 },
  show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.4 } },
};

const ExperienceCard = ({ exp, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={`${styles.timelineItem} ${
        index % 2 === 0 ? styles.left : styles.right
      }`}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      whileHover={{ scale: 1.02, y: -6 }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
      tabIndex={0}
    >
      <motion.div className={styles.content}>
        <h3 className={styles.role}>{exp.role}</h3>
        <span className={styles.company}>
          {exp.company} <br />
          {exp.duration}
        </span>

        <motion.ul
          className={styles.bullets}
          variants={bulletsContainer}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {exp.bullets.map((point, i) => (
            <motion.li key={i} variants={bulletItem}>
              <span className={styles.bulletIcon}>▹</span>
              {point}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

const WorkSection = () => {
  const theme = useSelector((state) => state.theme.mode);
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  // Apply parallax only once on the timeline
  const parallax = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.ambient}></div>

      <motion.h2
        className={styles.heading}
        style={{ color: theme === "light" ? "#222" : "#fff" }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Journey So Far
      </motion.h2>

      <motion.div
        className={styles.timeline}
        ref={timelineRef}
        style={{ y: parallax }}
      >
        <div className={styles.verticalLine}></div>

        {experiences.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} index={index} />
        ))}
      </motion.div>
    </section>
  );
};

export default WorkSection;
