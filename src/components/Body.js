import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Project from "./Project";
import About from "./About";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";

const Body = () => {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <Project />
        <About />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Body;
