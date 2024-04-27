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
        {/* Добавьте другие лабораторные работы по мере необходимости */}
      </List>
    </Drawer>
  );
};

export default Menu;
