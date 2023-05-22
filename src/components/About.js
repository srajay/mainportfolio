import React from "react";
import profileimg from "../assets/profileimg.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <div id="about" className="about">
        <div className="about-section">
          <div className="profile-img">
            <img src={profileimg} alt="profileimg" />
          </div>
          <div className="about-content">
            <div className="about-me">
              <h1>About me</h1>
              <p>
                As a frontend developer with a focus on aesthetics, I have a
                great passion for creating engaging and functional online
                experiences. I've been working in this sector for many years,
                and I have a thorough understanding of HTML, CSS, and
                JavaScript. I also have a steadfast commitment to expanding my
                knowledge and honing my skills. I appreciate collaborating with
                other engineers and designers since it enables me to realize
                notions. My top priority is making sure that the caliber of my
                work exceeds client expectations. In addition to my job, I
                continuously research fresh design concepts and go to regional
                technology events to keep up with the latest developments. My
                goal is to design user-friendly and aesthetically beautiful web
                experiences, and I'm excited to apply my enthusiasm to your next
                project.
              </p>
              <h2>
                HTML <span>|</span> CSS <span>|</span> MERN <span>|</span>{" "}
                PYTHON <span>|</span> JS
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
