import './App.scss';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import UserList from './components/UserList';
import SearchBar from './components/SearchBar';
import galaxy from './assets/galaxy.jpg';
import './App.scss';

const App = () => {
  const userId = 1;

  return (
    <Provider store={store}>
    <div className='app'>
      <div style={{ backgroundImage: `url(${galaxy})`, width: "1200px", height: "700px", backgroundRepeat: 'no-repeat', backgroundPosition: "center", backgroundSize: "cover", }} >
        <h1>-The Star Wars-</h1>
        <SearchBar />
        <h2>movie-character-data</h2>
        <UserList userId={userId} />
      </div>
    </div> 
    </Provider>
  );
};

export default App;

