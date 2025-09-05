"use client";

import styles from "./page.module.css";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import WorkSection from "./components/WorkSection";
import Navbar from "./components/Navbar";
import ContactSection from "./components/ContactSection";
import AwardsSection from "./components/AwardsSection";
import OpenSourceSection from "./components/OpensourcesSection";
import Footer from "./components/Footer";
import IntroPage from "./components/IntroPage"; 
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div data-theme={theme}>
      <div className="Global_background"></div>

        <>
          <Navbar />
          <section id="home">
            <HeroSection />
          </section>
          <section id="about">
            <AboutSection />
          </section>
          <section id="projects">
            <ProjectsSection />
          </section>
          <section id="contributions">
            <OpenSourceSection />
          </section>
          <section id="experience">
            <WorkSection />
          </section>
          <section id="awards">
            <AwardsSection />
          </section>
          <section id="contact">
            <ContactSection />
          </section>
          <Footer />
        </>
      {/* )} */}
    </div>
  );
}
