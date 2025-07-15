"use client";

import React from "react";
import styles from "./ContactSection.module.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const ContactSection = () => {
    const theme = useSelector((state) => state.theme.mode);

  return (
    <section
      id="contact"
      className={styles.contact}
      style={{ backgroundColor: theme === "light" ? "#fdfdfd" : "#000000ff" }}
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
          {" "}
          Get In Touch
        </h2>
        <p
          className={styles.text}
          style={{ color: theme === "light" ? "#555" : "#bbb" }}
        >
          Want to discuss an opportunity or just say hi? I'm always open to
          meaningful conversations.
        </p>
        <a href="mailto:mohansaim20@gmail.com" className={styles.button}>
          Say Hello
        </a>
      </motion.div>
    </section>
  );
};

export default ContactSection;
