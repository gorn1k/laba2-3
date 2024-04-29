import React, { useState } from 'react';
import './TopBar.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from '../../Home';
import Contact from '../../Contact';
import Table from '../../Table';
import About from '../../About';
import PostsPage from '../lab9/PostsPage';
// import Test from '../../testbutton';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import ButtonTheme from '../Theme/ButtonTheme';
import DataTablePage from '../../DataTablePage';
import Menu from '../Menu/menu'; // Импорт компонента Меню
import Drawer from '@mui/material/Drawer'; // Импорт компонента Drawer из Material-UI
import IconButton from '@mui/material/IconButton'; // Импорт компонента IconButton из Material-UI
import MenuIcon from '@mui/icons-material/Menu'; // Импорт иконки Меню из Material-UI/icons-material

function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для открытия/закрытия меню

  // Функция для открытия/закрытия меню
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Provider store={store}>
      <Router>
        <div>
          <header className="top-bar">
            <div className="container">
              <nav>
                <IconButton onClick={toggleMenu} edge="start" color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Link to="/">Главная</Link>
                <Link to="/registration">Регистрация</Link>
                <Link to="/about">О себе</Link>
                <Link to="/users">Users</Link>
                <ButtonTheme />
              </nav>
            </div>
          </header>
          <Routes>
            <Route path="/" element={<h1>Главная</h1>} />
            <Route path="/registration" element={<Home />} />
            <Route path="/counter" element={<Contact />} />
            <Route path="/table" element={<Table />} />
            <Route path="/labs" element={<About />} />
            <Route path="/users" element={<DataTablePage />} />
            {/* <Route path="/testbutton" element={<Test />} /> */}
            <Route path="/about" element={<h1>О себе</h1>} />
            <Route path="/lab9" element={<PostsPage />} />
          </Routes>
          {/* Если меню открыто, передаем состояние и функцию для закрытия в компонент Меню */}
          <Drawer anchor="left" open={isMenuOpen} onClose={toggleMenu}>
            <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </Drawer>
        </div>
      </Router>
    </Provider>
  );
}

export default TopBar;
