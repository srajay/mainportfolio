import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import "./education.css";

const Education = () => {
  return (
    <>
      <div id="education" className="education">
        <div className="main-container">
          <div className="edu-part">
            <div>
              <h1>
                EDUCATION
                <span>
                  <SchoolIcon />
                </span>
              </h1>
            </div>
            <div>
              <h2>BE COMPUTER ENGINEER</h2>
              <p>KANTIPUR ENGINEERING COLLEGE</p>
              <p>2075-2080</p>
            </div>
            <div>
              <h2>COLLEGE</h2>
              <p>PRASADI ACADEMY</p>
              <p>2072-2074</p>
            </div>
            <div>
              <h2>SCHOOL</h2>
              <p>BHAKTI INTERNATIONAL ACADEMY</p>
              <p>2059-2072</p>
            </div>
          </div>
          <div className="exp-part">
            <div>
              <h1>
                EXPERIENCE
                <span>
                  <WorkIcon />
                </span>
              </h1>
            </div>
            <div>
              <h2>AS A FREELANCE UI DESIGNER</h2>
              <p>VISIONAL COMMERCE, USA</p>
              <p>ADOBE XD | ADOBE ILLUSTRATION</p>
            </div>
            <div>
              <h2>AS A GRAPHIC DESIGNER</h2>
              <p>LITE 2020, KEC</p>
              <p>ADOBE PHOTOSHOP | ADOBE ILLUSTRATION</p>
            </div>
            <div>
              <h2>AS A GRAPHIC ASSOCIATE</h2>
              <p>HULT PRIZE 2022</p>
              <p>ADOBE PHOTOSHOP | ADOBE ILLUSTRATION</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
