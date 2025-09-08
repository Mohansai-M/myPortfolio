"use client";

import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import ThemeToggle from "./ThemeToggle";
import EffectToggle from "./EffectToggle";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

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
    <span data-theme={theme}>
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
        <ul className={styles.navLinks}>
          {sections.map((id) => (
            <li key={id}>
              <motion.div
                whileHover={{
                  scale: 1.1,
                  textShadow: `0 0 8px var(--brand-accent)`,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={id === "home" ? "/" : `/#${id}`}
                  scroll={false} 
                  className={`${styles.link} ${
                    activeSection === id ? styles.active : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </Link>
              </motion.div>
            </li>
          ))}
          <li className={styles.togglesContainer}>
            <EffectToggle />
            <ThemeToggle />
          </li>
        </ul>

        <div
          className={styles.menuIcon}
          onClick={() => setIsMenuOpen(true)}
          data-theme={theme}
        >
          <Menu size={28} />
        </div>
      </motion.nav>

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
              <button
                onClick={() => setIsMenuOpen(false)}
                className={styles.closeIcon}
              >
                <X size={28} />
              </button>

              <motion.ul className={styles.sidebarLinks} data-theme={theme}>
                {sections.map((id) => (
                  <motion.li key={id} variants={itemVariants}>
                    <Link
                      href={id === "home" ? "/" : `/#${id}`}
                      scroll={false}
                      className={`${styles.link} ${
                        activeSection === id ? styles.active : ""
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              <div className={styles.sidebarToggles}>
                <EffectToggle />
                <ThemeToggle />
              </div>
            </motion.div>

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
    </span>
  );
};

export default Navbar;
