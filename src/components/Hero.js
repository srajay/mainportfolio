import React from "react";
import "./hero.css";
import Astro from "../assets/astro.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MyCv from "../assets/AJAY CHAUDHARY.pdf";

const Hero = () => {
  return (
    <>
      <div id="hero" className="hero">
        <div className="hero-left">
          <div className="hero-header">
            <div className="hero-1">
              <h1>
                Hi there!
                <br />
                this is <span>Ajay Chaudhary</span>
                <br />
                React Developer.
              </h1>
            </div>
            <div className="hero-2">
              <p>
                As a skilled developer, I have a track record of creating
                intuitive and visually appealing interface and fully functioning
                application.
                <br />
                My expertise in both design and development allows me to create
                end-to-end user experiences.
              </p>

              <p>
                I am constantly seeking out new apportunities to learn and grow
                as a professional.
              </p>
            </div>
            <div className="hero-3">
              <button className="button-1">
                <a href={MyCv} download>
                  Download CV
                </a>
              </button>
              <button className="button-2">Contact me</button>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="astro-img">
            <img src={Astro} alt="astro" />
          </div>
          <div className="social-link">
            <p>Connect with me</p>
            <div className="social-box">
              <a
                href="https://github.com/srajay"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icons">
                  <GitHubIcon />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/ajay-chaudhary-b64214242/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icons">
                  <LinkedInIcon />
                </div>
              </a>
              <a
                href="https://www.instagram.com/__ajaychaudhary/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icons">
                  <InstagramIcon />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
