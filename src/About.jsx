import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';


const handleClick = () => {
  console.log("нажал");
};

function App() {

  return (
    <div className="App">
        <div>
          <h2>Hello World</h2>
          <Button label="Нажми" onClick={handleClick} />
        </div>
    </div>
  );
}

export default App;
