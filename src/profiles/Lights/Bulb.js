import React, { useState } from "react";
import "./Bulb.css"; // Import the CSS file

// Correct image import paths (Move images to src/assets/)
import redBulb from "./public/red.png";
import greenBulb from "./public/green.png";
import yellowBulb from "./public/yellow.png";

const Bulb = () => {
  const [light, setLight] = useState("transition"); // Initial state is "transition"

  const bulbImages = {
    red: redBulb,
    green: greenBulb,
    transition: yellowBulb // Ensure this is correctly mapped
  };

  return (
    <div className="main-container">
      <h1 style={{ color: "red" }}>Bulb</h1>

      <div className="container">
        <div>
          <button
            className={`red-btn ${light === "red" ? "active" : ""}`}
            onClick={() => setLight("red")}
          >
            Red Light
          </button>
          <button
            className={`green-btn ${light === "green" ? "active" : ""}`}
            onClick={() => setLight("green")}
          >
            Green Light
          </button>
        </div>

        <div className="bulb-container">
          <img className="bulb-img" src={bulbImages[light]} alt={`${light} Light`} />
        </div>
      </div>
    </div>
  );
};

export default Bulb;
