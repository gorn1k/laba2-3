import React from "react";
import { useTheme } from '../Theme/ThemeContext';
import "../../App.css"

const Container_theme = ({ children }) => {
    const { theme } = useTheme();

    return <div className={theme === 'светлая' ? 'container-light' : 'container-dark'}>{children}</div>;
}

export default Container_theme;