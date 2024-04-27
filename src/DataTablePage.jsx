import React, { useEffect, useState } from 'react';
import { getData, deleteData, postData, putData } from './components/Submit/apiRequests.js'
import './DataTablePage.css'; // Импорт CSS файла для стилей таблицы

const DataTablePage = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const responseData = await getData();
      setData(responseData);
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    }
  };

  const handleDelete = async (itemId) => {
    try {
      await deleteData(itemId);
      fetchData();
    } catch (error) {
      console.error('Ошибка при удалении данных:', error);
    }
  };

  const handleUpdate = async (itemId) => {
    try {
      const selectedItem = data.find(item => item.id === itemId);
      setSelectedItem(selectedItem);
    } catch (error) {
      console.error('Ошибка при обновлении данных:', error);
    }
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await postData(formData);
      fetchData();
      setFormData({ firstName: '', lastName: '', email: '' });
    } catch (error) {
      console.error('Ошибка при добавлении данных:', error);
    }
  };

  const handleUpdateFormChange = (e) => {
    setSelectedItem({ ...selectedItem, [e.target.name]: e.target.value });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      // Предположим, что selectedItem содержит только измененные данные
      await putData(selectedItem.id, selectedItem);
      fetchData();
      setSelectedItem(null);
    } catch (error) {
      console.error('Ошибка при обновлении данных:', error);
    }
  };

  return (
    <div className="center-container"> {/* Контейнер для выравнивания по центру */}
      <h1>Таблица данных</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Email</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={() => handleUpdate(item.id)}>Обновить</button>
                <button onClick={() => handleDelete(item.id)}>Удалить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleFormChange} placeholder="Имя" required />
        <input type="text" name="lastName" value={formData.lastName} onChange={handleFormChange} placeholder="Фамилия" required />
        <input type="email" name="email" value={formData.email} onChange={handleFormChange} placeholder="Email" required />
        <button type="submit">Добавить</button>
      </form>
      {selectedItem && (
        <form onSubmit={handleUpdateSubmit}>
          <input type="text" name="firstName" value={selectedItem.firstName} onChange={handleUpdateFormChange} placeholder="Имя" required />
          <input type="text" name="lastName" value={selectedItem.lastName} onChange={handleUpdateFormChange} placeholder="Фамилия" required />
          <input type="email" name="email" value={selectedItem.email} onChange={handleUpdateFormChange} placeholder="Email" required />
          <button type="submit">Сохранить</button>
        </form>
      )}
    </div>
  );
};

export default DataTablePage;
