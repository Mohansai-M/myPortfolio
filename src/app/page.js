import styles from "./page.module.css";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import WorkSection from "./components/WorkSection";
import Navbar from "./components/Navbar";
import ContactSection from "./components/ContactSection";
import AwardsSection from "./components/AwardsSection";
import Footer from "./components/Footer";
import OpenSourceSection from "./components/OpensourcesSection";

export default function Home() {
   return (
    <>
      <Navbar />
      <main>
        <section id="home"><HeroSection /></section>
        <section id="about"><AboutSection /></section>
        <section id="projects"><ProjectsSection /></section>
        <section id="open source contributions"><OpenSourceSection /></section>
        <section id="experience"><WorkSection /></section>
        <section id="awards"><AwardsSection /></section>
        <section id="contact"><ContactSection /></section>
      </main>
      <Footer />
    </>
  );
}
