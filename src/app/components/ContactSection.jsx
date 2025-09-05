"use client";

import React, { useState, useEffect } from "react";
import styles from "./ContactSection.module.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const greetings = [
  "Want to collaborate?",
  "Say hi! 👋",
  "Let's build something amazing!",
];

const ContactSection = () => {
  const theme = useSelector((state) => state.theme.mode);
  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  // Typing effect with timeout loop
  useEffect(() => {
    let currentText = greetings[textIndex];
    let i = 0;

    const type = () => {
      if (i <= currentText.length) {
        setTypedText(currentText.slice(0, i));
        i++;
        setTimeout(type, 120);
      } else {
        setTimeout(() => {
          setTextIndex((prev) => (prev + 1) % greetings.length);
          setTypedText("");
        }, 1500);
      }
    };

    type();
  }, [textIndex]);

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.ambient}></div>

      <motion.div
        className={styles.inner}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className={styles.heading}
          style={{ color: theme === "light" ? "#222" : "#fff" }}
          variants={itemVariants}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className={styles.text}
          style={{ color: theme === "light" ? "#444" : "#bbb" }}
          variants={itemVariants}
        >
          {typedText}
          <span className={styles.cursor}>|</span>
        </motion.p>

        <motion.a
          href="mailto:mohansaim20@gmail.com"
          className={styles.button}
          variants={itemVariants}
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 25px var(--neon-green), 0 0 60px #0ff",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Say Hello
        </motion.a>

        <motion.div className={styles.socials} variants={itemVariants}>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.2, color: "rgba(9, 163, 235, 1)" }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com"
            target="_blank"
            aria-label="GitHub"
            whileHover={{ scale: 1.2, color: "#39ff14" }}
          >
            <FaGithub />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
