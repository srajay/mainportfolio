import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav-conatiner">
        <div className="nav-content">
          <div className="box-container">
            <div className="icon-container">
              <a href="#hero">
                <HomeIcon />
              </a>
            </div>

            <div className="icon-container">
              <a href="#project">
                <AssignmentIcon />
              </a>
            </div>

            <div className="icon-container">
              <a href="#about">
                <PersonIcon />
              </a>
            </div>

            <div className="icon-container">
              <a href="#education">
                <SchoolIcon />
              </a>
            </div>

            <div className="icon-container">
              <a href="#contact">
                <ContactPageIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
