import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, addTodo, updateTodo, deleteTodo, clearTodos } from "../actions/todoActions.js";
import './TodoList.scss';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = () => {
    const title = prompt("Enter TODO title:");
    const description = prompt("Enter TODO description:");
    const statusToDo = prompt("Enter status ToDo: true / false ");
    dispatch(addTodo(title, description, statusToDo));
  };

  const handleUpdateTodo = (id, updates) => {
    dispatch(updateTodo(id, updates));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleClearTodos = () => {
    dispatch(clearTodos());
  };

  return (
    <div>
      <button className="btn-add" onClick={handleAddTodo}>Add Todo</button>
      <button className="btn-clear" onClick={handleClearTodos}>Clear Todos</button>
      <ul className="task-list">
        {todos.map((todo) => (
          <li className="task-item" key={todo._id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleUpdateTodo(todo._id, { completed: !todo.completed })}
            />
            <span>{todo.title}</span>
            <p>{todo.description}</p>
            <button className="btn-delete" onClick={() => handleDeleteTodo(todo._id)}>Delete</button>
            <button className="btn-edit" onClick={() => handleUpdateTodo(todo._id, { title: prompt("Edit TODO title:", todo.title), description: prompt("Edit TODO description:", todo.description) })}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

