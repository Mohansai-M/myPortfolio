'use client';

import React from 'react';
import styles from './ProjectsSection.module.css';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const projects = [
  {
    title: '✈️ FlightFinder (Full Stack Flight Discovery App)',
    description:
      'A full-stack flight search platform built with React and Node.js. Integrates real-world datasets (Goibibo, airport codes, CO₂ emissions) and supports live flight cards, airport search, and airline logo matching. MongoDB powers backend storage, while Redux manages frontend state.',
    tech: ['React', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'Framer Motion'],
    github: 'https://github.com/Mohansai-M/flight-finder',
    demo: 'https://flight-finder-v2.vercel.app/',
  },
  {
    title: '🔖 LinkNest (Full Stack Bookmarks App — In Progress)',
    description:
      'A modern bookmark manager to save, categorize, and search links with speed. Built using Next.js, TypeScript, GraphQL, and Redux. Will support authentication, responsive UI, and smooth animations using Framer Motion.',
    tech: ['Next.js', 'TypeScript', 'Redux', 'GraphQL', 'Framer Motion', 'MongoDB'],
    github: 'https://github.com/Mohansai-M',
    demo: 'https://vercel.com/',
  },
  {
    title: '📔 E-Bookstore (MERN Stack — Prototype)',
    description:
      'A partially completed e-commerce application built with the MERN stack. Includes product listing, cart, user authentication, and basic admin functionality. Created as a learning project during internship.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Mohansai-M/E-BookStore',
    demo: '',
  }
]

const ProjectsSection = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <section
      id="projects"
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
          Projects
        </h2>

        <div className={styles.grid}>
          {projects.map((project, index) => (
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
              <h3
                className={styles.title}
                style={{
                  color: theme === "light" ? "#1a1a1a" : "#eee",
                }}
              >
                {project.title}
              </h3>
              <p
                className={styles.description}
                style={{ color: theme === "light" ? "#444" : "#ccc" }}
              >
                {project.description}
              </p>
              <ul className={styles.tech}>
                {project.tech.map((tech, i) => (
                  <li
                    key={i}
                    style={{
                      backgroundColor: theme === "light" ? "#eef1f6" : "#333",
                      color: theme === "light" ? "#333" : "#ddd",
                    }}
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className={styles.links}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: theme === "light" ? "#1a73e8" : "#80bfff",
                    }}
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: theme === "light" ? "#1a73e8" : "#80bfff",
                    }}
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
