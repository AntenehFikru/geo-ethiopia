import React, { useState, useEffect } from "react";
import "./GameUI.css";
import ethiopia from "../assets/ethiopia-10.svg";
import ethiopialandscape from "../assets/ethiopia-landscape-3-10.png";
import logo from "../assets/logotest-10.png";

const GameUI = () => {
  const [timer, setTimer] = useState(30 * 60); // 30:00
  const [score, setScore] = useState(100);
  const [level, setLevel] = useState(1);
  const [selected, setSelected] = useState(null);

  // The four multiple-choice options
  const options = ["Addis Ababa", "Hawassa", "Mekelle", "Dire Dawa"];

  // Timer countdown effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Format seconds -> mm:ss
  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  // Handle guessing logic
  const handleGuess = (city) => {
    setSelected(city);
    if (city === "Addis Ababa") {
      setScore((prev) => prev + 10);
    } else {
      setScore((prev) => Math.max(0, prev - 5));
    }
  };

  return (
    <div className="desktop-1">
      <img
        className="ethiopia-landscape-3-10"
        src={ethiopialandscape}
        alt="Ethiopia landscape"
      />

      <div className="window"></div>
      <div className="rectangle-2"></div>
      <div className="rectangle-3"></div>

      <div className="guess-the-place">Guess the place</div>
      <div className="hint">Hint</div>

      {/* OPTIONS SECTION */}
      <div className="options-container">
        {options.map((city, i) => (
          <button
            key={i}
            className={`option-btn ${
              selected === city ? "active" : ""
            }`}
            onClick={() => handleGuess(city)}
          >
            {city}
          </button>
        ))}
      </div>

      <div className="rectangle-4"></div>

      <div className="_30-00">
        <span>🕐 {formatTime(timer)}</span>
      </div>

      <div className="div">❤️‍🔥❤️‍🔥❤️‍🔥</div>
      <div className="x-x-x">X X X</div>

      <img className="ethiopia-1" src={ethiopia} alt="Ethiopia" />

      <div className="ellipse-1"></div>
      <div className="_100">{score} 🌟</div>
      <div className="_4">4 🏵</div>
      <div className="level-1">Level {level} 🏆</div>

      <div className="rectangle-1"></div>
      <img className="logotest-1" src={logo} alt="Logo" />
    </div>
  );
};

export default GameUI;
