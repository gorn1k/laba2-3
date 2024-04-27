// Menu.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Menu2 = ({ isOpen, toggleMenu }) => {
  return (
    <nav className={`menu ${isOpen ? 'open' : ''}`}>
      <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/lab1">Лабораторная работа 1</Link></li>
        <li><Link to="/lab2">Лабораторная работа 2</Link></li>
        <li><Link to="/lab3">Лабораторная работа 3</Link></li>
      </ul>
      <button onClick={toggleMenu}>Toggle Menu</button>
    </nav>
  );
};

export default Menu2;

<Header>
<h1 onClick={toggleMenu}>Лабораторные работы (клик)</h1>
</Header>