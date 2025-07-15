"use client";

import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import ThemeToggle from "./ThemeToggle";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["home", "about", "projects", "experience"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offsets = sections.map((id) => {
        const el = document.getElementById(id);
        return { id, offsetTop: el?.offsetTop || 0 };
      });

      const current = offsets.findLast((sec) => scrollY >= sec.offsetTop - 100);
      if (current) setActiveSection(current.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Navbar */}
      <nav
        className={styles.navbar}
        style={{
          backgroundColor: theme === "light" ? "#ffffffee" : "#000000ff",
          borderColor: theme === "light" ? "#eaeaea" : "#2a2a2a",
        }}
      >
        <div className={styles.container}>
          <div className={styles.logo}> <a href ="/" className={styles.logoLink}>Mohansai</a></div>
          <ul className={styles.navLinks}>
            {sections.map((id) => (
              <li key={id}>
                <button
                  onClick={() => handleClick(id)}
                  className={`${styles.link} ${
                    activeSection === id ? styles.active : ""
                  }`}
                  style={{ color: theme === "light" ? "#555" : "#bbb" }}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              </li>
            ))}
          </ul>
          <div className={styles.right}>
            <ThemeToggle />
          </div>
          <button
            className={styles.menuIcon}
            onClick={() => setIsMenuOpen(true)}
            style={{ color: theme === "light" ? "#555" : "#bbb" }}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Sidebar + Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className={styles.sidebar}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                backgroundColor: theme === "light" ? "#fff" : "#000000",
              }}
            >
              <div className={styles.sidebarContent}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100vh",
                  }}
                >
                  <ul className={styles.sidebarLinks}>
                    {sections.map((id) => (
                      <li key={id}>
                        <button
                          onClick={() => handleClick(id)}
                          className={`${styles.link} ${
                            activeSection === id ? styles.active : ""
                          }`}
                          style={{ color: theme === "light" ? "#555" : "#bbb" }}
                        >
                          {id.charAt(0).toUpperCase() + id.slice(1)}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={styles.menuIcon}
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      color: theme === "light" ? "#555" : "#bbb",
                      alignContent: "end",
                      marginTop: "-200px",
                    }}
                  >
                    ✕ 
                  </button>
                </div>
                <div className={styles.sidebarToggle}>
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>

            <motion.div
              className={styles.overlay}
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
