"use client";

import React from "react";
import styles from "./ProjectsSection.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "./data/projects";

const ProjectsSection = () => {
  return (
    <section id="projects" className={styles.projects}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.heading}>Crafted with Code</h2>

        <div className={styles.grid}>
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={styles.card}
            >
              {/* Project Logo */}
              {project.logo && (
                <div className={styles.logoWrapper}>
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className={styles.logo}
                  />
                </div>
              )}

              {/* Project Title */}
              <h3 className={styles.title}>{project.title}</h3>

              {/* Sneak peek preview (hover screenshot) */}
              {project.screenshots && project.screenshots.length > 0 && (
                <div className={styles.preview}>
                  <img
                    src={project.screenshots[0]}
                    alt={`${project.title} preview`}
                  />
                </div>
              )}
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
