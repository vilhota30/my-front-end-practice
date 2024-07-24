import { render, fireEvent, screen } from '@testing-library/react';
import TodoList from "../components/TodoList/TodoList.jsx";

test('renders TodoList component', () => {
  render(<TodoList />);
  expect(screen.getByPlaceholderText(/enter a new todo/i)).toBeInTheDocument();
  });
  
test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/enter a new todo/i);
  const addButton = screen.getByLabelText(/add todo/i);
  
  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);
  
  expect(screen.getByText(/new todo/i)).toBeInTheDocument();
});
  
test('deletes a todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/enter a new todo/i);
  const addButton = screen.getByLabelText(/add todo/i);
  
  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);
  
  const deleteButton = screen.getByLabelText(/delete todo/i);
  fireEvent.click(deleteButton);
  
  expect(screen.queryByText(/new todo/i)).not.toBeInTheDocument();
});
  
test('clears input field after adding a todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/enter a new todo/i);
  const addButton = screen.getByLabelText(/add todo/i);
  
  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);
  
  expect(input.value).toBe('');
});
  
test('adds a new todo on Enter key press', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/enter a new todo/i);
  
  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
  
  expect(screen.getByText(/new todo/i)).toBeInTheDocument();
});