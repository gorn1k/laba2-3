import React from 'react';
import { useTheme } from './ThemeContext';

const ButtonTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === 'светлая' ? 'Поменять на темную тему' : 'Поменять на светлую тему'}
    </button>
  );
};

export default ButtonTheme;
