import express from 'express';
import { promises as fs } from 'fs';
import bodyParser from 'body-parser';
import cors from 'cors'; 

const app = express();
const port = 3002; // Изменен порт на 3002

app.use(bodyParser.json());
app.use(cors()); 

app.get('/data', async (req, res) => {
  try {
    const data = await fs.readFile('D:/proects/react_flash/src/components/Submit/data.json');
    res.json(JSON.parse(data));
  } catch (error) {
    console.error('Error reading data file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/data', async (req, res) => {
    try {
      const newData = req.body;
      const currentData = JSON.parse(await fs.readFile('D:/proects/react_flash/src/components/Submit/data.json'));
      currentData.push(newData);
      await fs.writeFile('D:/proects/react_flash/src/components/Submit/data.json', JSON.stringify(currentData, null, 2));
      res.status(201).json(newData);
      // Уведомляем клиента об успешной отправке данных
      res.send({ message: 'Данные успешно добавлены на сервер!' });
    } catch (error) {
      console.error('Error writing data file:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Обработчик ошибок
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
