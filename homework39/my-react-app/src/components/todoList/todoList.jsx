import React, { useState } from 'react';
import { TiDelete, TiPlus } from 'react-icons/ti';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import style from './todoList.module.scss';
import flowers from '../../assets/bgflowers.jpg';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const initialValues = {
    title: '',
    description: ''
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .min(5)
      .required(),
    description: Yup.string()
      .min(5)
      .required()
  });

  const onSubmit = (values, { resetForm }) => {
    const newTodo = {
      id: todos.length + 1,
      text: `${values.title}: ${values.description}`
    };
    setTodos([...todos, newTodo]);
    resetForm();    
  };

  return (
    <div className={style['todo-list']} style={{ backgroundImage: `url(${flowers})`, width: "900px", height: "600px", backgroundRepeat: 'no-repeat', backgroundPosition: "center", backgroundSize: "cover", marginTop: "20px" }}>
        <h2 className={style['title']}>Task-List</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className={style['form-container']}>
            <div className={style['input-container']}>
              <label className={style['label']} htmlFor="title">Назва завдання</label>
              <Field className={style['input']} type="text" id="title" name="title" />
              <ErrorMessage className={style['error-message']} name="title" component="div" />
            </div>
            <div className={style['input-container']}>
              <label className={style['label']} htmlFor="description">Опис завдання</label>
              <Field className={style['input']} type="text" id="description" name="description" />
              <ErrorMessage className={style['error-message']} name="description" component="div" />
            </div>
            <button type="submit" className={style['button-add']}>Додати<TiPlus/></button>
          </Form>
        </Formik>
      <ul className={style['task-container']}>
        {todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <div className={style['buttons']}>
              <button onClick={() => setTodos(todos.filter(t => t.id !== todo.id))} aria-label="Delete Todo"><TiDelete style={{ width: "24px", height: "24px", color: "white" }} /></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
