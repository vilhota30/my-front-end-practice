import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserById, clearUser } from '../slices/userSlice';
import UserItem from './UserItem';
import './UserList.scss';

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
    <div className='user-list'>
      <div className='data-container'>
         {status === 'loading' && <p>Loading...</p>}
         {status === 'failed' && <p>Error loading user details</p>}
         {status === 'succeeded' && user && <UserItem user={user} />}
      </div>
      <footer>
        <button className='btn-delete' onClick={() => dispatch(clearUser())}>Clear User</button>
      </footer>
    </div>
  );
};

export default UserList;
