import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import PasswordGenerator from "./Component/PasswordGenerator/PasswordGenerator";

const App = () => {
  return (
    <div className="App">
      <p>Password Generator</p>
      <Routes>
        <Route path="/" element={<PasswordGenerator />} />
      </Routes>

      <img
        src="./techover-logo.png"
        alt="logo"
        style={{ width: "200px", marginTop: "15px" }}
      />
    </div>
  );
};

export default App;
