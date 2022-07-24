import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>KMEA CAMPUS MAP</h1>
      <p>Let's explore the way...</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          <a href="https://kmeacollege.ac.in/">ABOUT KMEA</a>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
