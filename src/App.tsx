import React from 'react';
import BMICalculator from '../src/components/Component';

import "./index.css"

const App: React.FC = () => {
  return (
    <div className='container'>
        
      <h1 className='headerText'>BMI Calculator</h1>
      <BMICalculator />
    
    </div>
  );
};

export default App;