import React from "react";
import "./project.css";
import Astro from "../assets/astro.png";
import ProductList from "./Project-filter";

const Project = () => {
  return (
    <>
      <div id="project" className="project">
        <div className="project-head">
          <div className="project-title">
            <h1>Projects</h1>
            <p>
              Effective project management is key to the successful completion
              of a project.
              <br />
              They provide a structured approach to achieving specific
              <br /> goals and objectives within a set timeframe.
            </p>
          </div>
          <div className="project-img">
            <img src={Astro} alt="astro" />
          </div>
        </div>
      </div>

      <ProductList />
    </>
  );
};

export default Project;
