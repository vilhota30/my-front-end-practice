import React from 'react';
import TodoForm from './components/todoForm.js';
import TodoList from './components/todoList.js';
import Footer from './components/Footer.js';
import './App.scss';
import springFlowers from '../src/assets/springFlowers.jpg';

const App = () => {
  return (
    <div className="app" style={{ backgroundImage: `url(${springFlowers})`, width: "900px", height: "600px", backgroundRepeat: 'no-repeat', backgroundPosition: "center", backgroundSize: "cover", }} >
      <h1>TODO LIST</h1>
      <TodoForm />
      <TodoList />
      <Footer />
    </div>
  );
};

export default App;

