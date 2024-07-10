import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserById } from '../slices/userSlice';
import './SearchBar.scss';


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
    <div className='search-bar'>
      <input
        type="text"
        placeholder="example query = people/2"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
