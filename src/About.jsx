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
          <Button label="Нажми" onClick={handleClick} />
          <h2>Hello World</h2>
        </div>
    </div>
  );
}

export default App;
