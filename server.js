import express from 'express';
import { promises as fs } from 'fs';
import bodyParser from 'body-parser';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid'; // Импортируем функцию для генерации UUID

const app = express();
const port = 3002;

app.use(bodyParser.json());
app.use(cors());

app.get('/data', async (req, res) => {
  try {
    const data = await fs.readFile('./data.json');
    res.json(JSON.parse(data));
  } catch (error) {
    console.error('Ошибка чтения файла данных:', error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});

app.post('/data', async (req, res) => {
  try {
    let currentData = JSON.parse(await fs.readFile('./data.json'));
    const newData = req.body;
    // Генерируем уникальный идентификатор для нового пользователя
    newData.id = uuidv4();
    currentData.push(newData);
    await fs.writeFile('./data.json', JSON.stringify(currentData, null, 2));
    res.status(201).json({ message: 'Данные успешно добавлены на сервер!', newData });
  } catch (error) {
    console.error('Ошибка записи файла данных:', error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});


app.delete('/data/:id', async (req, res) => {
  try {
    const id = req.params.id;
    let currentData = JSON.parse(await fs.readFile('./data.json'));
    
    console.log('Current Data:', currentData); // Добавим вывод текущих данных для отладки
    
    currentData = currentData.filter(item => item.id !== id);
    
    console.log('New Data:', currentData); // Добавим вывод измененных данных для отладки
    
    await fs.writeFile('./data.json', JSON.stringify(currentData, null, 2));
    res.status(200).json({ message: 'Данные успешно удалены с сервера!' });
  } catch (error) {
    console.error('Ошибка удаления данных:', error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});

app.put('/data/:id', async (req, res) => {
  try {
    const id = req.params.id;
    let currentData = JSON.parse(await fs.readFile('./data.json'));
    
    console.log('Current Data:', currentData); // Добавим вывод текущих данных для отладки
    
    const index = currentData.findIndex(item => item.id === id);
    if (index !== -1) {
      currentData[index] = { ...currentData[index], ...req.body };
      await fs.writeFile('./data.json', JSON.stringify(currentData, null, 2));
      res.status(200).json({ message: 'Данные успешно обновлены на сервере!' });
    } else {
      res.status(404).json({ error: 'Ресурс не найден' });
    }
    console.log('New Data:', currentData); // Добавим вывод измененных данных для отладки
  } catch (error) {
    console.error('Ошибка обновления данных:', error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});


// Обработчик ошибок
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Что-то сломалось!');
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
