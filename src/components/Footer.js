import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-section">
          <div className="footer-logo">
            <h1>AJAY.</h1>
          </div>
          <div className="footer-content">
            <div className="footer-info">
              <h2>Ajay Chaudhary</h2>
              <p>Computer Engineer</p>

              <p>Frontend Developer</p>
            </div>
            <div className="footer-address">
              <h2>Address</h2>
              <p>Basundhara</p>
              <p>Kathmandu, Nepal</p>
            </div>
            <div className="footer-contact">
              <h2>Contact</h2>
              <p>9863211232</p>
              <p>ajaysrchaudhary@gmail.com</p>
            </div>
            <div className="footer-service">
              <h2>Services</h2>
              <p>UI Design</p>
              <p>Frontend Development</p>
            </div>
            <div className="footer-skill">
              <h2>Skills</h2>
              <p>HTML CSS JS</p>
              <p>MERN Stack</p>
              <p>Python C C++ MySQL</p>
            </div>
          </div>
          <div className="hori-line"></div>
          <div className="footer-bottom">
            <div className="social-icon">
              <div>
                <a
                  href="https://github.com/srajay"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </a>
              </div>

              <div>
                <a
                  href="https://www.linkedin.com/in/ajay-chaudhary-b64214242/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/__ajaychaudhary/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
            <div className="copy-right">
              <p>&#169; DanfeMunal. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
