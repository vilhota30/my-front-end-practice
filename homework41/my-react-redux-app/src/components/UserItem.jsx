import React from 'react';
import './UserItem.scss';

const UserItem = ({ user }) => {
  return (
    <li className='user-item'>
      <p>Name: {user.name}</p>
      <p>Height: {user.height}</p>
      <p>Mass: {user.mass}</p>
      <p>Hair Color: {user.hair_color}</p>
      <p>Eye color: {user.eye_color}</p>
      <p>Gender: {user.gender}</p>
      <p>Homeworld: {user.homeworld}</p>
      <p>Starships: {user.starships}</p>
    </li>
  );
};

export default UserItem;
