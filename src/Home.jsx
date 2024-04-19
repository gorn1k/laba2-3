// Home.js

import React from 'react';
import RegistrationForm from './components/Submit/submit';

function Home() {
  return (
    <div className="App">
      <h2>Регистрация</h2>
      <p>Пожалуйста, зарегистрируйтесь</p>
      <RegistrationForm />
    </div>
  );
}

export default Home;
