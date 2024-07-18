import React from "react";
import TodoList from "./frontend/components/TodoList.jsx";
import './App.scss';

const App = () => (
  <div className='app'>
    <h1>TODO List</h1>
    <TodoList />
  </div>
);

export default App;
