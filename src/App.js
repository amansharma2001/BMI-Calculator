import React, { useMemo, useState } from "react";
import "./App.css";
const App = () => {
  const [weight, setWeight] = useState(30);
  const [height, setHeight] = useState(100);

  const onSetWeight = (e) => {
    setWeight(e.target.value);
  };
  const onSetHeight = (e) => {
    setHeight(e.target.value);
  };

  const bmi = useMemo(() => {
    return (weight / ((height / 100) * (height / 100))).toFixed(1);
  }, [height, weight]);

  let status = "";

  if (bmi <= 18.4) status = "underweight";
  else if (bmi >= 18.5 && bmi <= 24.9) status = "normal";
  else if (bmi >= 25.0 && bmi <= 39.9) status = "overweight";
  else status = "obese";
  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className="input-section">
        <p className="slider-output"> Weight: {weight} kg</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          max="200"
          onChange={onSetWeight}
        />
        <p className="slider-output"> Height: {height} cm</p>
        <input
          className="input-slider"
          type="range"
          max="250"
          onChange={onSetHeight}
        />
      </div>
      <div className="output-section">
        <p> Your BMI is :</p>
        <p className="output">
          {bmi} <br /> which comes under {status}{" "}
        </p>
      </div>
    </main>
  );
};

export default App;
