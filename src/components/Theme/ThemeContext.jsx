import React, { createContext, useState, useContext } from 'react';

// Создаем контекст
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('светлая');
  
    const toggleTheme = () => {
      setTheme(prevTheme => (prevTheme === 'светлая' ? 'темная' : 'светлая'));
    };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  

// Создаем хук для использования контекста
export const useTheme = () => useContext(ThemeContext);
