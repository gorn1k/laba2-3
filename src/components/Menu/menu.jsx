import React from 'react';
import Header from '../Header/header';



const Menu = ({ isOpen, toggleMenu }) => {
  return (
    <Header>
      <h1 onClick={toggleMenu}>Лабораторные работы (клик)</h1>
    </Header>
  );
};

export default Menu;
