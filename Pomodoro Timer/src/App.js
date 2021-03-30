import React, { useState } from "react";
import "./App.css";

function padTime(time) {
  return time.toString().padStart(2, "0");
}

export default function App() {
  const [title, setTitle] = useState("Let the countdown begin!");
  const [timeLeft, setTimeLeft] = useState(25*60);

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);

  return (
    <React.StrictMode>
      <div className="app">
        <h2>{title}</h2>

        <div className="timer">
          <span>{minutes}</span>
          <span>:</span>
          <span>{seconds}</span>
        </div>

        <div className="buttons">
          <button>Start</button>
          <button>Stop</button>
          <button>Reset</button>
        </div>
      </div>
    </React.StrictMode>
  );
}
