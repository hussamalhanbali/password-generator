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

     <div>
     <img
        src="./techover.png"
        alt="Techover"
        style={{ width: "200px", marginTop: "15px" }}
      />
     </div>
    </div>
  );
};

export default App;
