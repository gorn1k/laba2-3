// server.cjs

// Импортируем необходимые модули
const express = require('express');
const mysql = require('mysql');

// Создаем экземпляр приложения Express
const app = express();

// Создаем объект конфигурации для подключения к базе данных MariaDB
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydatabase'
});

// Подключаемся к базе данных
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MariaDB:', err);
    return;
  }
  console.log('Connected to MariaDB');
});

// Определяем маршрут для обработки запросов к серверу
app.get('/', (req, res) => {
  // Выполняем запрос к базе данных MariaDB
  connection.query('SELECT * FROM users', (error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).send('Error executing query');
      return;
    }
    // Отправляем результаты запроса в качестве ответа на запрос к серверу
    res.json(results);
  });
});

// Запускаем сервер на указанном порту
const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
