import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />
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

export default App;
