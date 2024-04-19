import React from 'react';
import './TopBar.css'; // Подключаем CSS файл для стилей
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from '../../Home';
import About from '../../About';
import Contact from '../../Contact';
import { Provider } from 'react-redux'; // Импорт Provider из react-redux
import store from '../Redux/store';

function TopBar() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <header className="top-bar">
            <div className="container">
              <nav>
                <Link to="/">Регистрация</Link>
                <Link to="/labs">Лабы</Link>
                <Link to="/counter">increment/decrement счетчик</Link>
              </nav>
            </div>
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/labs" element={<About />} />
            <Route path="/counter" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default TopBar;
