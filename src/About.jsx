// App.jsx
import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Content from './components/Content/content';
import Menu from './components/Menu/menu';


const handleClick = () => {
  console.log("нажал");
};

const labWorks = [
  { title: 'Лабораторная работа 1 (клик)', content:(        
    <div>
      <Button label="Нажми" onClick={handleClick} />
      <h2>Hello World</h2>
    </div>
  )},
  { title: 'Лабораторная работа 2 (клик)', content: 'Содержимое второй лабораторной работы' },
  { title: 'Лабораторная работа 3 (клик)', content: 'Содержимое третьей лабораторной работы' }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <div className="App">
      <Menu isOpen={menuOpen} toggleMenu={toggleMenu} />
      <main>
        {menuOpen && labWorks.map(work => (
          <Content key={work.title} title={work.title} content={work.content} />
        ))}
      </main>
    </div>
  );
}

export default App;
