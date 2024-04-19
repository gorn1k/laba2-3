import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';

function RegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const onSubmit = useCallback(data => {
    // Здесь можно добавить логику для отправки данных на сервер
    console.log(data);
    // После успешной отправки формы устанавливаем флаг успешной регистрации в true
    setRegistrationSuccess(true);
  }, []);

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