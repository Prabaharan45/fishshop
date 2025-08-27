import React from "react";
import "./About.css";
import aboutBg from "../Assets/image1.jpg"; // Import your image

function About() {
  return (
    <div
      className="about-page"
      style={{ backgroundImage: `url(${aboutBg})` }} // Inline background
    >
      <div className="content">
        <h1>Welcome to Divine Fish Aquarium</h1>
        <p>We provide a variety of beautiful fishes for your  needs.</p>
      </div>
    </div>
  );
}

export default About;
