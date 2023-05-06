


import  { useState } from 'react';
import Typewriter from 'typewriter-effect';
import "../index.css";
import BMITips from './HealthTips';

const BMICalculator = () => {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [bmi, setBmi] = useState(0);

    const calculateBMI = () => {
        const heightInMeters = height / 100;
        const bmiValue = weight / (heightInMeters * heightInMeters);
        setBmi(Number(bmiValue.toFixed(1)));
    };

    let resultMessage = '';
    let lastWordColor = '';
    if (bmi < 18.5) {
        resultMessage = 'You are underweight';
        lastWordColor = 'yellow';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultMessage = 'You are healthy';
        lastWordColor = 'green';
    } else if (bmi >= 25 && bmi <= 29.9) {
        resultMessage = 'You are overweight';
        lastWordColor = 'yellow';
    } else {
        resultMessage = 'You are obese';
        lastWordColor = 'red';
    }

    const resultText = (
        <Typewriter
        options={{
          strings: [resultMessage],
          autoStart: true,
          loop: false,
          delay: 50,
          pauseFor: 9999999999999,
        } as any}
      />
    );

    return (
        <div className="bmi-calculator">
            
            <div className="input-wrapper">
                <label htmlFor="height">Height (cm):</label>
                <input
                    type="tel"
                    id="height"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="weight">Weight (kg):</label>
                <input
                    type="tel"
                    id="weight"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                />
            </div>
            <button onClick={calculateBMI}>Calculate BMI</button>
            <div className="result">
                {bmi > 0 && (
                    <>
                        <p>Your BMI is {bmi}</p>
                        <p style={{ color: lastWordColor }}>{resultText}</p>
                    </>
                )}
                {bmi > 0 && <BMITips bmi={bmi} />}
            </div>
        </div>
    );
};

export default BMICalculator;