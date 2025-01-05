import React, { useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [range, setRangeValue] = useState(0);
  const [length, setLength] = useState(5);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value);
    setLength(value);
  };

  const getSliderBackground = () => {
    const percentage = ((length - 5) / 10) * 100;
    return `linear-gradient(to right, #a638f6 ${percentage}%, #2d2039 ${percentage}%)`;
  };

  const generatePassword = () => {
    let characters = "";
    let generatedPassword = "";

    if (includeUppercase) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeLowercase) {
      characters += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeNumbers) {
      characters += "0123456789";
    }
    if (includeSymbols) {
      characters += "!@#$%^&*()";
    }

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters.charAt(randomIndex);
    }
    setPassword(generatedPassword);

    if (length >= 9 && includeNumbers && includeLowercase && includeSymbols) {
      setRangeValue(100);
    } else if (length >= 9 && includeNumbers && includeLowercase) {
      setRangeValue(75);
    } else {
      setRangeValue(25);
    }
  };

  const getColor = () => {
    if (range >= 75 && includeSymbols && includeNumbers && includeLowercase) {
      return "#1abea0";
    } else if (range >= 25 && includeNumbers && includeLowercase) {
      return "#ffa257";
    } else {
      return "red";
    }
  };

  const getPasswordStrength = () => {
    let strength = "WEAK";
    if (includeNumbers && includeLowercase && includeSymbols) {
      strength = "GREAT";
    } else if (includeNumbers && includeLowercase) {
      strength = "MEDIUM";
    }
    return { strength };
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
  };

  const { strength } = getPasswordStrength();
  const meterColor = getColor();

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="text"
          value={password}
          readOnly
          style={{
            backgroundColor: "#2d2039",
            border: "none",
            color: "#ffff",
            height: "43px",
            paddingLeft: "15px",
            width: "100%",
            fontSize: "16px",
          }}
        />
        <button
          onClick={copyPassword}
          style={{
            backgroundColor: "#2d2039",
            height: "45px",
            border: "none",
            cursor: "pointer",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35.373"
            height="25.56"
            viewBox="0 0 35.373 43.56"
          >
            <g id="copy" transform="translate(-1428.197 -707.762)">
              <path
                id="Path_267"
                data-name="Path 267"
                d="M17657.32,370.466h18.391v6.666h-25.152V343.97h6.762v26.5Z"
                transform="translate(-16220.861 372.69)"
                fill="none"
                stroke="#a638f6"
                strokeLinejoin="round"
                strokeWidth="3"
              />
              <path
                id="Path_268"
                data-name="Path 268"
                d="M17702.658,341.5h7.041l-.031-21.33h-12V307.46h-13.541v7.229"
                transform="translate(-16247.628 401.802)"
                fill="none"
                stroke="#a638f6"
                strokeLinejoin="round"
                strokeWidth="3"
              />
              <path
                id="Path_270"
                data-name="Path 270"
                d="M18009.23,292.46l11.969,12.76"
                transform="translate(-16559.133 416.802)"
                fill="none"
                stroke="#a638f6"
                strokeLinejoin="round"
                strokeWidth="3"
              />
            </g>
          </svg>
        </button>
      </div>
      <div style={{ backgroundColor: "#2d2039", marginTop: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: "15px",
            paddingLeft: "15px",
            paddingTop: "10px",
          }}
        >
          <label>Character Length</label>
          <div style={{ color: "#a638f6", fontSize: "30px" }}>{length}</div>
        </div>
        <input
          className="custom-slider"
          type="range"
          min={5}
          max={15}
          value={length}
          onChange={handleSliderChange}
          style={{ background: getSliderBackground() }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#2d2039",
          paddingLeft: "15px",
          paddingRight: "15px",
        }}
      >
        <input
          className="Input-checkbox"
          type="checkbox"
          id="includeUppercase"
          checked={includeUppercase}
          onChange={(e) => setIncludeUppercase(e.target.checked)}
        />
        <label htmlFor="includeUppercase">Include Uppercase Letters</label>
        <input
          className="Input-checkbox"
          type="checkbox"
          id="includeLowercase"
          checked={includeLowercase}
          onChange={(e) => setIncludeLowercase(e.target.checked)}
        />
        <label htmlFor="includeLowercase">Include Lowercase Letters</label>
        <input
          className="Input-checkbox"
          type="checkbox"
          id="includeNumbers"
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
        />
        <label htmlFor="includeNumbers" style={{ paddingRight: "85px" }}>
          Include Numbers
        </label>
        <input
          className="Input-checkbox"
          type="checkbox"
          id="includeSymbols"
          checked={includeSymbols}
          onChange={(e) => setIncludeSymbols(e.target.checked)}
        />
        <label htmlFor="includeSymbols" style={{ paddingRight: "85px" }}>
          Include Symbols
        </label>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#a638f6",
              color: "#090909",
              height: "45px",
              marginTop: "20px",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            Strength
            <span
              style={{
                color: "#ffff",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                gap: "7px",
              }}
            >
              {strength} <meter min="5" max="100" value={range} />
            </span>
          </div>

          {/* <meter
            min="5"
            max="100"
            value={range}
            style={{ appearance: "none" }}
          ></meter> */}
          <style>{`
                  meter::-webkit-meter-bar {
                  background: #ddd;
                  border-radius: 1px;
                  height: 30px;         
                  }
                           
                  meter::-webkit-meter-optimum-value {
                  background: ${meterColor};
                  border-radius: 1px;
                  height: 30px;         
                  }                
                  `}</style>
        </div>
        <button
          onClick={generatePassword}
          style={{
            width: "100%",
            height: "45px",
            backgroundColor: "#a638f6",
            border: "none",
            color: "#ffff",
            cursor: "pointer",
            marginBottom: "20px",
            marginTop: "20px"
          }}
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
