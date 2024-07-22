import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserById, clearUser } from '../slices/userSlice';
import UserItem from './UserItem';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { styled } from '@mui/system';

const UserListContainer = styled(Box)({
  minWidth: '600px',
  margin: '0 auto',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const DataContainer = styled(Box)({
  width: '100%',
  maxWidth: '600px',
  marginBottom: '5px',
  backgroundColor: 'rgba(191, 38, 191, 0.36)',
  borderRadius: '10px',
  padding: '10px',
  textAlign: 'center',
});

const Footer = styled(Box)({
  backgroundColor: 'blueviolet'
});

const UserList = ({ userId }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const status = useSelector((state) => state.users.status);

  useEffect(() => {
    dispatch(fetchUserById(userId));

    return () => {
      dispatch(clearUser());
    };
  }, [dispatch, userId]);

  return (
    <UserListContainer>
      <DataContainer>
        {status === 'loading' && <CircularProgress />}
        {status === 'failed' && <Typography variant="body1" color="error">Error loading user details</Typography>}
        {status === 'succeeded' && user && <UserItem user={user} />}
      </DataContainer>
      <Footer>
        <Button variant="contained" color="secondary" onClick={() => dispatch(clearUser())}>Clear User</Button>
      </Footer>
    </UserListContainer>
  );
};

export default UserList;