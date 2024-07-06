import React from 'react';
import { useSelector } from 'react-redux';

const Footer = () => {
  const totalTodos = useSelector((state) => state.todos.length);

  return <footer><p>Total tasks: {totalTodos}</p></footer>;
};

export default Footer;
