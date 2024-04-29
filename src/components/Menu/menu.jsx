// Menu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Menu = ({ isOpen, toggleMenu }) => {
  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={toggleMenu}
    >
      <List>
        <ListItem button component={Link} to="/labs" onClick={toggleMenu}>
          <ListItemText primary="Лаб-1" />
        </ListItem>
        <ListItem button component={Link} to="/counter" onClick={toggleMenu}>
          <ListItemText primary="Лаб-2" />
        </ListItem>
        <ListItem button component={Link} to="/table" onClick={toggleMenu}>
          <ListItemText primary="Таблицы" />
        </ListItem>
        <ListItem button component={Link} to="/testbutton" onClick={toggleMenu}>
          <ListItemText primary="Test-кнопки" />
        </ListItem>
        <ListItem button component={Link} to="/lab9" onClick={toggleMenu}>
          <ListItemText primary="lab9" />
        </ListItem>
        {/* Добавьте другие лабораторные работы по мере необходимости */}
      </List>
    </Drawer>
  );
};

export default Menu;
