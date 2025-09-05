"use client";

import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import ThemeToggle from "./ThemeToggle";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { Menu,X } from "lucide-react";

const sections = ["home", "about", "projects", "contributions", "experience"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useSelector((state) => state.theme.mode);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setScrollProgress((scrollY / docHeight) * 100);
      setScrolled(scrollY > 20);

      const offsets = sections.map((id) => ({
        id,
        offsetTop: document.getElementById(id)?.offsetTop || 0,
      }));
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

  // Framer Motion
  const sidebarVariants = {
    hidden: { x: "100%" },
    show: { x: 0, transition: { type: "spring", stiffness: 250, damping: 25 } },
    exit: {
      x: "100%",
      transition: { type: "spring", stiffness: 250, damping: 25 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <>
      {/* Scroll Progress */}
      <div
        className={styles.scrollProgress}
        style={{ width: `${scrollProgress}%` }}
      />


      <motion.nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className={styles.logo} onClick={() => handleClick("home")}>
          Mohansai
        </div>

        <ul className={styles.navLinks}>
          {sections.map((id) => (
            <li key={id}>
              <motion.a
                whileHover={{
                  scale: 1.1,
                  textShadow: `0 0 8px var(--neon-green)`,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => handleClick(id)}
                className={`${styles.link} ${
                  activeSection === id ? styles.active : ""
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </motion.a>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Hamburger */}
        <div className={styles.menuIcon} onClick={() => setIsMenuOpen(true)} data-theme={theme}>
          <Menu size={28} />
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className={styles.sidebar}
              variants={sidebarVariants}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <button onClick={() => setIsMenuOpen(false)} className={styles.closeIcon}>
                <X size={28} />
              </button>
              <motion.ul className={styles.sidebarLinks} data-theme={theme}>
                {sections.map((id) => (
                  <motion.li key={id} variants={itemVariants}>
                    <button
                      onClick={() => handleClick(id)}
                      className={`${styles.link} ${
                        activeSection === id ? styles.active : ""
                      }`}
                    >
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                    </button>
                  </motion.li>
                ))}
              </motion.ul>
              <ThemeToggle />
            </motion.div>

            {/* Overlay */}
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
