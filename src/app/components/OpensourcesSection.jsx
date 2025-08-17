"use client";

import React from "react";
import styles from "./ProjectsSection.module.css";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";
import Image from "next/image";

// Fallback repo icon (for repos without logo)
const RepoIcon = () => (
  <svg
    height="16"
    width="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    style={{ marginRight: "6px" }}
  >
    <path d="M2 2.5A2.5 2.5 0 014.5 0h7A2.5 2.5 0 0114 2.5v11a.5.5 0 01-.79.407L8 10.069l-5.21 3.838A.5.5 0 012 13.5v-11z" />
  </svg>
);

const contributions = [
  {
    repoName: "Checkmate",
    org: "bluewave-labs",
    repoLink: "https://github.com/bluewave-labs/Checkmate",
    logo: "/checkmate-icon.svg",
    description:
      "A developer-focused internal dashboard tool for team and account management. Contributed multiple improvements to frontend UX, logic handling, and component styling.",
    contributions: [
      {
        title: "🌍 Multilingual i18n Support Enhancement",
        details:
          "Extended support for additional languages by updating language mapping logic, initializing translation files, ensuring correct flag rendering, and maintaining key consistency in the UI.",
        tech: ["React", "i18n", "UX", "Flag Icons"],
      },
      {
        title: "🛠️ Icon Replacement in Incident Page",
        details:
          "Replaced old icons with new SVGs in the Incident page's block area and updated colors to match sidebar styling, improving visual consistency.",
        tech: ["React", "SVG", "UI Consistency"],
      },
      {
        title: "🔄 Self-Edit Redirect Logic in Team Route",
        details:
          "Implemented a redirect for self-profile editing via team route, guiding users to the profile page and preventing Redux state conflicts.",
        tech: ["React Router", "Redux", "Auth"],
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
      "An open-source React application built on the 321 Vegan API, helping users check and manage products, brands, cosmetics, and additives for vegan-friendliness.",
    contributions: [
      {
        title: "🔧 Frontend Bug Fixes & UX Improvements",
        details: [
          "✅ Fixed checkbox–textarea sync issues by implementing precise add/remove logic for accurate state synchronization.",
          "🧹 Enhanced input validation to handle trimming, empty values, and duplicates, ensuring reliable data flow.",
          "🎨 Improved UX consistency by streamlining display updates when changing vegan status for smoother interactions.",
        ],
        tech: [
          "React",
          "State Management",
          "Validation",
          "Form Handling",
          "UX/UI",
        ],
      },
    ],
  },
];

const OpenSourceSection = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <section
      id="opensource"
      className={styles.projects}
      style={{ backgroundColor: theme === "light" ? "#f9f9f9" : "#0e0e0e" }}
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
          Open Source Contributions
        </h2>

        <div className={styles.grid}>
          {contributions.map((repo, index) => {
            const logoSrc =
              repo.repoName === "321 Vegan Tool"
                ? theme === "light"
                  ? repo.logoDark
                  : repo.logoLight
                : repo.logo;

            return (
              <div
                key={index}
                className={styles.card}
                style={{
                  backgroundColor: theme === "light" ? "white" : "#1a1a1a",
                  borderColor: theme === "light" ? "#e3e3e3" : "#2a2a2a",
                  boxShadow:
                    theme === "light"
                      ? "0 4px 10px rgba(0,0,0,0.06)"
                      : "0 4px 10px rgba(255,255,255,0.04)",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  {logoSrc ? (
                    <Image
                      src={logoSrc}
                      alt={`${repo.repoName} Logo`}
                      width={20}
                      height={20}
                    />
                  ) : (
                    <RepoIcon />
                  )}
                  <h3
                    className={styles.title}
                    style={{
                      color: theme === "light" ? "#1a1a1a" : "#eee",
                      margin: 0,
                    }}
                  >
                    {repo.repoName} {repo.org ? `(${repo.org})` : ""}
                  </h3>
                </div>

                <p
                  className={styles.description}
                  style={{ color: theme === "light" ? "#444" : "#ccc" }}
                >
                  {repo.description}
                </p>

                <div className={styles.links} style={{ marginBottom: "1rem" }}>
                  <a
                    href={repo.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: theme === "light" ? "#1a73e8" : "#80bfff",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <FaGithub />
                    View Repository
                  </a>
                </div>

                <ul
                  style={{
                    paddingLeft: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {repo.contributions.map((c, i) => (
                    <li key={i}>
                      <strong
                        style={{ color: theme === "light" ? "#222" : "#fff" }}
                      >
                        {c.title}
                      </strong>
                      {Array.isArray(c.details) ? (
                        <ul
                          style={{
                            marginTop: "0.5rem",
                            paddingLeft: "1.25rem",
                            color: theme === "light" ? "#444" : "#ccc",
                          }}
                        >
                          {c.details.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      ) : (
                        <p
                          style={{
                            color: theme === "light" ? "#444" : "#ccc",
                            marginTop: "0.25rem",
                          }}
                        >
                          {c.details}
                        </p>
                      )}
                      <ul
                        className={styles.tech}
                        style={{ marginTop: "0.5rem" }}
                      >
                        {c.tech.map((t, j) => (
                          <li
                            key={j}
                            style={{
                              backgroundColor:
                                theme === "light" ? "#eef1f6" : "#333",
                              color: theme === "light" ? "#333" : "#ddd",
                            }}
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default OpenSourceSection;
