import style from './Form.module.scss';
import React from 'react';
import { useForm } from 'react-hook-form';
import bgImageFlowers from '../../assets/bgflowers.jpg';


const RegisterForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <div style={{ backgroundImage: `url(${bgImageFlowers})`, widht: "800px", height: "600px", backgroundRepeat: 'no-repeat', backgroundPosition: "center", backgroundSize: "cover", padding: "30px 40px", }}>
    <form className={style['register-form']} onSubmit={handleSubmit(onSubmit)}>
      <div className={style['form-group']}>
        <label>First Name</label>
        <input
          type="text"
          {...register('firstName', {
            required: true,
            minLength: 5,
            maxLength: 12,
            pattern: /^[a-zA-Z]+$/,
          })}
          className={style['form-control']}
        />
        {errors.firstName && errors.firstName.type === 'required' && (
          <span className={style['error']}>First Name is required</span>
        )}
        {errors.firstName && errors.firstName.type === 'minLength' && (
          <span className={style['error']}>First Name should be at least 5 characters</span>
        )}
        {errors.firstName && errors.firstName.type === 'maxLength' && (
          <span className={style['error']}>First Name should not exceed 12 characters</span>
        )}
        {errors.firstName && errors.firstName.type === 'pattern' && (
          <span className={style['error']}>First Name should only contain letters</span>
        )}
      </div>
  
      <div className={style['form-group']}>
        <label>Last Name</label>
        <input
          type="text"
          {...register('lastName', {
            required: true,
            minLength: 5,
            maxLength: 12,
            pattern: /^[a-zA-Z]+$/,
          })}
          className={style['form-control']}
        />
        {errors.lastName && errors.lastName.type === 'required' && (
          <span className={style['error']}>Last Name is required</span>
        )}
        {errors.lastName && errors.lastName.type === 'minLength' && (
          <span className={style['error']}>Last Name should be at least 5 characters</span>
        )}
        {errors.lastName && errors.lastName.type === 'maxLength' && (
          <span className={style['error']}>Last Name should not exceed 12 characters</span>
        )}
        {errors.lastName && errors.lastName.type === 'pattern' && (
          <span className={style['error']}>Last Name should only contain letters</span>
        )}
      </div>
  
      <div className={style['form-group']}>
        <label>Email</label>
        <input
          type="email"
          {...register('email', {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@gmail.com$/,
          })}
          className={style['form-control']}
        />
        {errors.email && errors.email.type === 'required' && (
          <span className={style['error']}>Email is required</span>
        )}
        {errors.email && errors.email.type === 'pattern' && (
          <span className={style['error']}>Invalid email format. Must be gmail.com</span>
        )}
      </div>
  
      <div className={style['form-group']}>
        <label>Password</label>
        <input
          type="password"
          autoComplete="current-password"
          {...register('password', {
          required: true,
          minLength: 1,
          maxLength: 10,
          pattern: /^\d+$/,
         })}
         className={style['form-control']}
         />
         {errors.password && errors.password.type === 'required' && (
         <span className={style['error']}>Password is required</span>
         )}
        {errors.password && errors.password.type === 'minLength' && (
        <span className={style['error']}>Password should be at least 1 character</span>
        )}
        {errors.password && errors.password.type === 'maxLength' && (
        <span className={style['error']}>Password should not exceed 10 characters</span>
        )}
        {errors.password && errors.password.type === 'pattern' && (
        <span className={style['error']}>Password should only contain digits</span>
        )}
      </div>
  
      <div className={style['form-group']}>
        <label>Location</label>
        <input
          type="text"
          {...register('location', { required: true })}
          className={style['form-control']}
        />
        {errors.location && <span className={style['error']}>Location is required</span>}
      </div>
      <button type="submit" className={style['btn-submit']}>Submit</button>
    </form>
    </div>
  );
  
};

export default RegisterForm;

