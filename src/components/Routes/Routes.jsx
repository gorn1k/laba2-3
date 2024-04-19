// Routes.jsx
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Content from '../Content/content2';
import Home from '../../Home'; // Создайте компонент Home для домашней страницы

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      {/* Добавьте маршруты для ваших контентных страниц */}
      <Route path="/lab1" render={() => <Content title="Лабораторная работа 1" content="Содержимое первой лабораторной работы" />} />
      <Route path="/lab2" render={() => <Content title="Лабораторная работа 2" content="Содержимое второй лабораторной работы" />} />
      <Route path="/lab3" render={() => <Content title="Лабораторная работа 3" content="Содержимое третьей лабораторной работы" />} />
    </Switch>
  );
};

export default Routes;
