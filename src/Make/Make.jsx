import React from "react";
import "./Make.css";

function Make() {
  return (
    <div className="main">
        <div className="video-container1">
            <video autoPlay loop muted>
                <source src="/make2.mp4"/>
            </video>
        </div>
        <div className="text-container1">
            <p>Hands shape what <br/>
                hearts imagine. <br/>
                In their rhythm, <br/>
                light takes form, and becomes Aloré.
            </p>
        </div>
    </div>
  );
}

export default Make;