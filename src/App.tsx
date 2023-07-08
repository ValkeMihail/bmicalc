import React from 'react';
import BMICalculator from '../src/components/Component';
import "./index.css"

const App: React.FC = () => {
  return (
    <div className='mx-auto mt-8 mb-20 flex flex-col items-center '>
        
      <h1 className='font-mono text-2xl text-yellow-400 font-bold uppercase mx-auto my-4'>
        BMI Calculator
      </h1>
      <BMICalculator />
    
    </div>
  );
};

export default App;