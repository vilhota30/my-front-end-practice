import React, { useState } from 'react';
import { TiDelete, TiPlus } from 'react-icons/ti';
import { Box, TextField, Button, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
import { styled } from '@mui/system';
import flowers from '../../assets/flowers.jpg';

const TodoListContainer = styled(Box)({
  backgroundImage: `url(${flowers})`,
  width: '800px',
  height: '600px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  boxSizing: 'border-box',
  minWidth: '600px',
  margin: '0 auto',
});

const InputContainer = styled(Box)({
  display: 'flex',
  width: '500px',
  marginBottom: '10px',
  marginLeft: 'auto',
  marginRight: 'auto',
  '& input': {
    flex: 1,
    padding: '8px',
    fontSize: '1rem',
    backgroundColor: 'moccasin',
    borderRadius: '4px 0 0 4px',
  },
  '& button': {
    padding: '8px 12px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '0 4px 4px 0',
    cursor: 'pointer',
  },
});

const TaskContainer = styled(List)({
  width: '500px',
  height: '400px',
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: 'rgba(191, 38, 191, 36%)',
  borderRadius: '10px',
  padding: '5px',
});

const TodoListItem = styled(ListItem)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px 0',
  borderBottom: '1px solid #ddd',
});

const TodoButton = styled(IconButton)({
  backgroundColor: 'rgb(65, 53, 144)',
  border: 'none',
  cursor: 'pointer',
  '&:hover': {
    color: 'wheat',
  },
});

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
    <TodoListContainer>
      <InputContainer>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Enter a new todo"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <Button 
          onClick={handleAddTodo} 
          variant="contained" 
          color="primary" 
          startIcon={<TiPlus />}
        >
          Add
        </Button>
      </InputContainer>
      <TaskContainer>
        {todos.map(todo => (
          <TodoListItem key={todo.id} divider>
            <ListItemText primary={todo.text} />
            <ListItemSecondaryAction>
              <TodoButton 
                edge="end" 
                aria-label="delete" 
                onClick={() => handleDeleteTodo(todo.id)}
              >
                <TiDelete style={{ width: '24px', height: '24px', color: 'white' }} />
              </TodoButton>
            </ListItemSecondaryAction>
          </TodoListItem>
        ))}
      </TaskContainer>
    </TodoListContainer>
  );
};

export default TodoList;
