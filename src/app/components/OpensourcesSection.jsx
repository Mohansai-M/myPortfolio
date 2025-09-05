"use client";

import React, { useMemo, useState } from "react";
import styles from "./OpensourcesSection.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";
import Image from "next/image";

// Fallback repo icon
const RepoIcon = () => (
  <svg
    height="18"
    width="18"
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M2 2.5A2.5 2.5 0 014.5 0h7A2.5 2.5 0 0114 2.5v11a.5.5 0 01-.79.407L8 10.069l-5.21 3.838A.5.5 0 012 13.5v-11z" />
  </svg>
);


const repos = [
  {
    repoName: "Checkmate",
    org: "bluewave-labs",
    repoLink: "https://github.com/bluewave-labs/Checkmate",
    logo: "/checkmate-icon.svg",
    description:
      "A developer-focused internal dashboard for team & account management. I contributed UX polish, logic refactors, and consistent component styling.",
    contributions: [
      {
        title: "🌍 Multilingual i18n Support Enhancement",
        details:
          "Extended support for additional languages by updating language mapping, initializing translation files, ensuring correct flag rendering, and maintaining key consistency in the UI.",
        tech: ["React", "i18n", "UX", "Flag Icons"],
      },
      {
        title: "🛠️ Icon Replacement in Incident Page",
        details:
          "Replaced outdated icons with new SVGs in the Incident block; synced colors with the sidebar to unify visual language.",
        tech: ["React", "SVG", "UI Consistency"],
      },
      {
        title: "🔒 Self-Edit Redirect Logic",
        details:
          "Added a safeguard to detect when a user attempts to edit their own account via `/account/team/:userId`. Implemented a redirect to `/account/profile` in such cases, ensuring self-edit happens only from the profile page. This prevents Redux state mismatch issues and keeps the experience consistent across views.",
        tech: ["React", "Redux", "Routing", "UX Consistency"],
      },
    ],
  },
  {
    repoName: "321 Vegan Tool",
    org: "ISAsxm",
    repoLink: "https://github.com/ISAsxm/321vegan-tool/tree/main",
    logoLight: "/logo-light.png",
    logoDark: "/logo-dark.png",
    description:
      "Open source React app on the 321 Vegan API to browse products, brands, cosmetics, and additives for vegan friendliness.",
    contributions: [
      {
        title: "✨ Quick-Add Buttons for 'Problem' Field",
        details: [
          "Fixed checkbox–textarea sync with precise add/remove logic for reliable state.",
          "Improved validation for trimming, empties, and duplicates.",
          "Streamlined UI updates when changing vegan status for smoother UX.",
        ],
        tech: ["React", "State Mgmt", "Validation", "Form Handling", "UX/UI"],
      },
    ],
  },
];

// animation
const tabsVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const terminalVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const logContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const logLine = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35 } },
};

const OpenSourceSection = () => {
  const theme = useSelector((state) => state.theme.mode);
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState({}); 

  const activeRepo = useMemo(() => repos[active], [active]);

  const toggle = (key) =>
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));


  const repoLogo = (repo) => {
    if (repo.logoDark || repo.logoLight) {
      return theme === "light" ? repo.logoDark : repo.logoLight;
    }
    return repo.logo;
  };


  const tagHue = (i) => `hsl(${(i * 57) % 360} 90% 55%)`;

  return (
    <section id="contributions" className={styles.section}>
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={styles.bgParticles} aria-hidden="true" />

      <div className={styles.container}>
        <h2
          className={styles.heading}
        >
          Open Source Contributions
        </h2>

        {/* Tabs */}
        <motion.div
          className={styles.tabs}
          variants={tabsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          role="tablist"
          aria-label="Open source repositories"
        >
          {repos.map((repo, i) => {
            const isActive = active === i;
            return (
              <button
                key={repo.repoName}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${i}`}
                id={`tab-${i}`}
                className={`${styles.tab} ${isActive ? styles.tabActive : ""}`}
                onClick={() => setActive(i)}
              >
                <span className={styles.tabInner}>
                  {repoLogo(repo) ? (
                    <Image
                      src={repoLogo(repo)}
                      alt=""
                      width={18}
                      height={18}
                      className={styles.tabIcon}
                    />
                  ) : (
                    <span className={styles.tabIcon}>
                      <RepoIcon />
                    </span>
                  )}
                  <span className={styles.tabText}>
                    {repo.repoName}
                    {repo.org ? (
                      <span className={styles.tabOrg}> ({repo.org})</span>
                    ) : null}
                  </span>
                </span>
                <span className={styles.tabUnderline} aria-hidden="true" />
              </button>
            );
          })}
        </motion.div>

        {/* Terminal */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className={styles.terminal}
            variants={terminalVariants}
            initial="hidden"
            animate="visible"
            exit={{
              opacity: 0,
              y: 16,
              scale: 0.99,
              transition: { duration: 0.25 },
            }}
            role="tabpanel"
            id={`panel-${active}`}
            aria-labelledby={`tab-${active}`}
          >
            {/* header */}
            <div className={styles.termHeader}>
              <span className={`${styles.dot} ${styles.red}`} />
              <span className={`${styles.dot} ${styles.yellow}`} />
              <span className={`${styles.dot} ${styles.green}`} />
              <div className={styles.termTitle}>
                {activeRepo.repoName} — terminal
              </div>
              <a
                className={styles.repoLink}
                href={activeRepo.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                title="Open repository"
              >
                <FaGithub />
                <span className={styles.repoLinkText}>Repository</span>
              </a>
            </div>

            {/* meta */}
            <div className={styles.repoMeta}>
              <div className={styles.repoMetaLeft}>
                {repoLogo(activeRepo) ? (
                  <Image
                    src={repoLogo(activeRepo)}
                    alt=""
                    width={20}
                    height={20}
                  />
                ) : (
                  <RepoIcon />
                )}
                <strong className={styles.repoName}>
                  {activeRepo.repoName}
                </strong>
                {activeRepo.org && (
                  <span className={styles.repoOrg}>({activeRepo.org})</span>
                )}
              </div>
              <p className={styles.repoDesc}>{activeRepo.description}</p>
            </div>

            {/* logs */}
            <motion.div
              className={styles.termBody}
              variants={logContainer}
              initial="hidden"
              animate="visible"
            >
              {activeRepo.contributions.map((c, idx) => {
                const key = `${active}-${idx}`;
                const isOpen = !!expanded[key];

                const detailsArray = Array.isArray(c.details)
                  ? c.details
                  : [c.details];

                return (
                  <motion.div key={key} className={styles.logBlock}>
                    <motion.button
                      className={styles.logLine}
                      variants={logLine}
                      onClick={() => toggle(key)}
                      aria-expanded={isOpen}
                    >
                      <span className={styles.logPrefix}>$</span>
                      <span className={styles.logText}>
                        git log - {c.title}
                      </span>
                      <span
                        className={`${styles.chev} ${
                          isOpen ? styles.chevOpen : ""
                        }`}
                        aria-hidden="true"
                      >
                        ▾
                      </span>
                    </motion.button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          className={styles.expand}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                        >
                          <div className={styles.expandInner}>
                            <ul className={styles.points}>
                              {detailsArray.map((d, i) => (
                                <li key={i} className={styles.pointItem}>
                                  {d}
                                </li>
                              ))}
                            </ul>

                            <ul className={styles.tags}>
                              {c.tech.map((t, i) => (
                                <li
                                  key={t + i}
                                  className={styles.tag}
                                  style={{
                                    ["--tag-hue"]: tagHue(i),
                                  }}
                                >
                                  {t}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default OpenSourceSection;
