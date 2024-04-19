import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../../Home';
import About from '../../About';
import Contact from '../../Contact';
import './sidebar.css'; // Подключаем файл стилей для боковой панели

const Sidebar = () => {
  return (
    <Router>
      <div className="sidebar-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/labs" element={<About />} />
          <Route path="/counter" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Sidebar;