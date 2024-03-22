// App.jsx
import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Container from './components/Container/container';
import Footer from './components/Footer/footer';
import Content from './components/Content/content';
import Menu from './components/Menu/menu';
import Sidebar from './components/SideBar/sidebar';
import { ThemeProvider } from './components/Theme/ThemeContext';
import ButtonTheme from './components/Theme/ButtonTheme';

const handleClick = () => {
  console.log("нажал");
};

const labWorks = [
  { title: 'Лабораторная работа 1 (клик)', content:(        
    <Container>
      <Button label="Нажми" onClick={handleClick} />
      <h2>Hello World</h2>
    </Container>
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
    <ThemeProvider>
      <div className="App">
        <Menu isOpen={menuOpen} toggleMenu={toggleMenu} />
        <main>
          {menuOpen && labWorks.map(work => (
            <Content key={work.title} title={work.title} content={work.content} />
          ))}
        </main>
        <Sidebar />
        <Footer className="footer">
          <p>Гордеев Никита 2024</p>
        </Footer>
        <ButtonTheme />
      </div>
    </ThemeProvider>
  );
}

export default App;
