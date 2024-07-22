import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserById } from '../slices/userSlice';
import { Box, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';

const SearchBarContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '20px',
});

const StyledTextField = styled(TextField)({
  marginBottom: '10px',
  '& .MuiInputBase-root': {
    borderRadius: '5px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
  },
  '& .MuiInputBase-input': {
    color: 'white',
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.5)',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ccc',
    },
    '&:hover fieldset': {
      borderColor: '#61dafb',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#21a1f1',
    },
  },
});

const StyledButton = styled(Button)({
  padding: '10px 20px',
  borderRadius: '5px',
  backgroundColor: '#61dafb',
  color: 'black',
  '&:hover': {
    backgroundColor: '#21a1f1',
  },
});

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    const match = inputValue.match(/people\/(\d+)/);
    if (match) {
      const id = match[1];
      dispatch(fetchUserById(id));
    } else {
      alert('Please enter a valid path in the format: people/<number>');
    }
  };

  return (
    <SearchBarContainer>
      <StyledTextField
        variant="outlined"
        placeholder="example query = people/2"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        InputLabelProps={{ shrink: true }}
      />
      <StyledButton onClick={handleSearch}>
        Search
      </StyledButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
