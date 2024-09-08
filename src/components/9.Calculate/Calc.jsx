import React, { useState } from "react";
import "./Calc.css";
import imgCalc from "../../assets/images/calc.jpg";
export default function Calc() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [weightCategory, setWeightCategory] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100; // Convert height to meters
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);

      let category = '';
      if (bmiValue < 18.5) {
        category = 'Underweight';
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        category = 'Normal weight';
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        category = 'Overweight';
      } else {
        category = 'Obesity';
      }
      setWeightCategory(category);
    }
  };
  return (
    <>
     <div className="calc-container">
      <img src={imgCalc} alt="BMI Calculator" />
      <div className="content-calc">
        <h1>
          Let's Calculate Your <span className="calc-spa">BMI</span>
        </h1>
        <p>
          Easily determine your body mass index with our accurate calculation
          tool.
        </p>
        <div className="clc-inp">
          <div className="inp-calc-bmi">
            <input
              type="text"
              placeholder="weight / kg"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="white-placeholder"
            />
            <label htmlFor="">Your BMI is: <h3 className="result-bmi">{bmi}</h3></label>
          </div>
          <div className="inp-calc-weight">
            <input
              type="text"
              placeholder="height / cm"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="white-placeholder"
            />
            <label htmlFor="">Your weight is: <h3 className="result-bmi">{weightCategory}</h3></label>
          </div>
        </div>
        <button onClick={calculateBMI}>Calculate</button>
      </div>
    </div>
    </>
  );
}
