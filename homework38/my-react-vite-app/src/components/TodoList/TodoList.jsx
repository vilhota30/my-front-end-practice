import React, { useState } from 'react';
import { TiDelete, TiPlus } from 'react-icons/ti';
import style from '../TodoList/TodoList.module.scss';
import flowers from '../../assets/flowers.jpg';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: todos.length + 1,
        text: inputValue,
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div className={style['todo-list']} style={{ backgroundImage: `url(${flowers})`, widht: "800px", height: "600px", backgroundRepeat: 'no-repeat', backgroundPosition: "center", backgroundSize: "cover", }}>
      <div className={style['input-container']}>
        <input
          type="text"
          placeholder="Enter a new todo"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button className={style['buttons']} onClick={handleAddTodo} aria-label="Add Todo"><TiPlus /></button>
      </div>
      <ul className={style['task-container']}>
        {todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <div className={style['buttons']}>
              <button onClick={() => handleDeleteTodo(todo.id)} aria-label="Delete Todo"><TiDelete style={{width: "24px", height:"24px", color: "white"}}/></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
