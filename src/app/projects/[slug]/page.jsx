"use client";

import { projects } from "@/app/components/data/projects";
import Image from "next/image";
import styles from "./ProjectDetail.module.css";
import { use, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";

export default function ProjectDetail({ params }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  const project = projects.find((p) => p.slug === slug);
  const theme = useSelector((state) => state.theme.mode);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) return <p className={styles.notFound}>Project not found</p>;

  const ProjectheroRef = useRef(null);
  const techRef = useRef([]);
  const galleryRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (ProjectheroRef.current) {
        ProjectheroRef.current.style.transform = `translateY(${
          scrollY * 0.15
        }px)`;
      }
      techRef.current.forEach((el, i) => {
        if (el)
          el.style.transform = `translateY(${scrollY * 0.1 * ((i % 3) + 1)}px)`;
      });
      galleryRef.current.forEach((el, i) => {
        if (el)
          el.style.transform = `translateY(${
            scrollY * 0.05 * (i % 2 === 0 ? 1 : -1)
          }px)`;
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
    arrows: true,
  };

  return (
    <div className={styles.wrapper} data-theme={theme}>
      {/* Hero Section */}
      <section className={styles.Projecthero}>
        <div className={styles.ProjectheroLeft}>
          {project.logo && (
            <div className={styles.titleRow}>
              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                width={40}
                height={40}
                className={styles.logo}
              />
              <h1 className={styles.title}>{project.title}</h1>
            </div>
          )}
          <p className={styles.description}>{project.description}</p>
          <div className={styles.actions}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.buttonPrimary}
              >
                Live Demo
              </a>
            )}
          </div>
          <ul className={styles.techList}>
            {project.tech.map((t, i) => (
              <li
                key={i}
                className={styles.techItem}
                ref={(el) => (techRef.current[i] = el)}
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.ProjectheroRight}>
          {project.screenshots?.[0] && (
            <div
              className={styles.ProjectheroImageWrapper}
              ref={ProjectheroRef}
            >
              <Image
                src={project.screenshots[0]}
                alt={project.title}
                width={600}
                height={400}
                className={styles.ProjectheroImage}
                onClick={() => setSelectedImage(project.screenshots[0])}
              />
            </div>
          )}
        </div>
      </section>

      {/* Gallery Section */}
      {project.screenshots?.length > 1 && (
        <section className={styles.gallerySection}>
          <h2 className={styles.sectionHeading}>Gallery</h2>

          {project.screenshots.length > 4 ? (
            <Slider {...sliderSettings} className={styles.gallery}>
              {project.screenshots.slice(1).map((src, i) => (
                <div
                  key={i}
                  className={styles.galleryItem}
                  ref={(el) => (galleryRef.current[i] = el)}
                  onClick={() => setSelectedImage(src)}
                >
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${i + 2}`}
                    width={800}
                    height={500}
                    className={styles.image}
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <div className={styles.gallery}>
              {project.screenshots.slice(1).map((src, i) => (
                <div
                  key={i}
                  className={styles.galleryItem}
                  ref={(el) => (galleryRef.current[i] = el)}
                  onClick={() => setSelectedImage(src)}
                >
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${i + 2}`}
                    width={800}
                    height={500}
                    className={styles.image}
                  />
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Video Section */}
      {project.video && (
        <section className={styles.videoSection}>
          <h2 className={styles.sectionHeading}>Demo</h2>
          <div className={styles.videoWrapper}>
            <div  style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
              <iframe
                src="https://www.loom.com/embed/714332964d214fa4a2db39c5f15b421d?sid=52586ba1-d0e1-4c4f-a845-f8291492d2b0"
                frameBorder="0"
                allowFullScreen
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                title={`${project.title} Demo Video`}
              />
            </div>
          </div>
        </section>
      )}

      {/* Modal */}
      {selectedImage && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <Image
              src={selectedImage}
              alt="Selected"
              width={1000}
              height={700}
              className={styles.modalImage}
            />
          </div>
        </div>
      )}
    </div>
  );
}
