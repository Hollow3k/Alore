import React from "react";
import "./Quote.css";

function Quote() {
  return (
    <div className="video-container">
      {/* Background video */}
      <video className="background-video" src="/vid3.mp4" autoPlay loop muted />

      {/* Text overlay */}
      <div className="overlay">
        <h2 className="overlay-title one">Crafted for the</h2>
        <h1 className="overlay-title">POETRY</h1>
        <h2 className="overlay-title two">within.</h2>
      </div>
    </div>
  );
}

export default Quote;