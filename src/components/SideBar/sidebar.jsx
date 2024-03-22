import React from 'react';

const Sidebar = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li><a href="/">Главная</a></li>
          <li><a href="/about">О нас</a></li>
          <li><a href="/contact">Контакты</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;