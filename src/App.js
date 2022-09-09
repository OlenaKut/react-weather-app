import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is coded by{" "}
          <a
            href="https://www.linkedin.com/in/%D0%BE%D0%BB%D0%B5%D0%BD%D0%B0-%D0%BA%D1%83%D1%82%D0%B0%D1%81%D0%B5%D0%B2%D0%B8%D1%87-b0b99a24b/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Olena Kutasevych
          </a>{" "}
          and is
          <a
            href="https://github.com/OlenaKut/react-weather-app.git"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-soursed on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
