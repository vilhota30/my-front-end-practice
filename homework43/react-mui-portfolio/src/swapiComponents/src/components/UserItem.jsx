import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const UserItemContainer = styled(Box)({
  listStyle: 'none',
  padding: '20px',
  margin: '5px 0',
  borderRadius: '10px',
  width: '600px',
  height: '400px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const UserItem = ({ user }) => {
  return (
    <UserItemContainer component="li">
      <Typography variant="body1">Name: {user.name}</Typography>
      <Typography variant="body1">Height: {user.height}</Typography>
      <Typography variant="body1">Mass: {user.mass}</Typography>
      <Typography variant="body1">Hair Color: {user.hair_color}</Typography>
      <Typography variant="body1">Eye color: {user.eye_color}</Typography>
      <Typography variant="body1">Gender: {user.gender}</Typography>
      <Typography variant="body1">Homeworld: {user.homeworld}</Typography>
      <Typography variant="body1">Starships: {user.starships}</Typography>
    </UserItemContainer>
  );
};

export default UserItem;

