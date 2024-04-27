import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function RegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const onSubmit = async data => {
    try {
      await axios.post('http://localhost:3002/data', data);
      setRegistrationSuccess(true);
      // Показываем уведомление об успешной отправке данных
      alert('Данные успешно отправлены на сервер!');
    } catch (error) {
      console.error('Error submitting registration:', error);
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
