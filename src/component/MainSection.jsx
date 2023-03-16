import React from "react";

export default function MainSection() {
  return (
    <div className="main-section">
      <div className="main-section-content">
        <div className="main-section-content-text">
          <h1>Get Crypto Related Knowledge</h1>
          <span>
            Vivamus suscipit tortor eget felis porttitor volutpat. Mauris
            blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec
            sollicitudin molestie malesuada. Sed
          </span>
          <button className="theme-button"><b>Check Posts</b></button>
        </div>
        <div className="main-section-content-image">
          <img src="images/btc.svg" />
        </div>
      </div>
    </div>
  );
}
