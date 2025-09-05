"use client";

import React, { useState } from "react";
import styles from "./Footer.module.css";
import { FaArrowUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const theme = useSelector((state) => state.theme.mode);
  const [particles, setParticles] = useState([]);

const scrollToTop = () => {
  document.documentElement.scrollIntoView({ behavior: "smooth" });
};

  return (
    <motion.footer
      className={`${styles.footer} ${
        theme === "light" ? styles.light : styles.dark
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.container}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Mohansai Mallineni
        </p>
        <p className={styles.message}>Let's connect, built with passion ⚡</p>
      </div>

      {/* Scroll-to-top button */}
      <div className={styles.scrollWrapper}>
        <motion.button
          className={styles.scrollTop}
          onClick={() => scrollToTop()}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </motion.button>

        {/* Particle burst */}
        <AnimatePresence>
          {particles.map((p) => (
            <motion.span
              key={p.id}
              className={styles.particle}
              initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              animate={{
                x: p.distance * Math.cos((p.angle * Math.PI) / 180),
                y: p.distance * Math.sin((p.angle * Math.PI) / 180),
                opacity: 0,
                scale: 0.3,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              onAnimationComplete={() =>
                setParticles((prev) =>
                  prev.filter((particle) => particle.id !== p.id)
                )
              }
              style={{ backgroundColor: p.color }}
            />
          ))}
        </AnimatePresence>
      </div>
    </motion.footer>
  );
};

export default Footer;
