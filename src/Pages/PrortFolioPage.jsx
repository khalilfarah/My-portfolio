import React from "react";
import Navbar from "../components/layout/Navbar";
import About from "../components/About/About";
import MyProjects from "../components/Projects/MyProjects";
import Contact from "../components/Contact/Contact";
import Skills from "../components/Skills/Skills";

export default function PrortFolioPage() {
  return (
    <div>
      <Navbar />
      <About />
      <MyProjects />
      <Skills />
      <Contact />
    </div>
  );
}
