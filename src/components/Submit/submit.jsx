import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; // Импортируем функцию для генерации UUID

function RegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const onSubmit = async data => {
    try {
      // Генерируем уникальный ID для нового пользователя
      const newUser = { ...data, id: uuidv4() };
      await axios.post('http://localhost:3002/data', newUser);
      setRegistrationSuccess(true);
      // Показываем уведомление об успешной отправке данных
      alert('Данные успешно отправлены на сервер!');
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          Имя:
          <input type="text" {...register('firstName', { required: true })} />
          {errors.firstName && <span>Поле обязательно для заполнения</span>}
        </label>
      </div>

      <div>
        <label>
          Фамилия:
          <input type="text" {...register('lastName', { required: true })} />
          {errors.lastName && <span>Поле обязательно для заполнения</span>}
        </label>
      </div>

      <div>
        <label>
          Email:
          <input type="text" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
          {errors.email && <span>Поле обязательно для заполнения и должно быть в формате email</span>}
        </label>
      </div>

      <div>
        <button type="submit">Зарегистрироваться</button>
      </div>

      {registrationSuccess && <div>Вы успешно зарегистрированы!</div>}
    </form>
  );
}

export default RegistrationForm;