import React from "react";
import "./VideoWithText.css";

function VideoWithText() {
  return (
    <div className="video-container">
      {/* Background video */}
      <video className="background-video" src="/vid2.mp4" autoPlay loop muted />

      {/* Text overlay */}
      <div className="overlay">
        <h1 className="overlay-title">Aloré</h1>
      </div>
    </div>
  );
}

export default VideoWithText;