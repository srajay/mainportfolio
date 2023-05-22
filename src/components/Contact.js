import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div id="contact" className="contact">
        <div className="contact-container">
          <div className="con-header">
            <h1>SEND ME A MESSAGE !</h1>
            <p>
              Got a question or proposal, or just want
              <br /> to say hello? Go ahead.
            </p>
          </div>
          <div className="input-section">
            <div className="fill-name">
              <p>Your Name</p>
              <input type="name" placeholder="Enter your name" />
            </div>

            <div className="fill-email">
              <p>Email Address</p>
              <input type="email" placeholder="Enter your email address" />
            </div>
          </div>
          <div className="message-section">
            <p>Your Message</p>
            <input
              type="text"
              placeholder="Hi, I think we need a design system for our products at Company X. "
            />
          </div>
          <div className="button-container">
            <button type="submit">Send Message</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
