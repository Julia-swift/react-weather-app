import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />

        <footer>
          <a
            href="https://github.com/Julia-swift/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          {""} by Yuliya Stryzhova
        </footer>
      </div>
    </div>
  );
}
