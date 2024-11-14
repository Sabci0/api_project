import React from 'react';
import { Avatar, Button } from '@mui/material';
import { useUserContext } from '../context/UserContext';

const UserAvatar: React.FC = () => {
  const { isLoggedIn, username, logOut } = useUserContext();

  if (!isLoggedIn) return null;

  return (
    <div className="flex items-center">
      <Avatar>{username.charAt(0).toUpperCase()}</Avatar>
      <span className="ml-2">{username}</span>
      <Button onClick={logOut} className="ml-4">Logout</Button>
    </div>
  );
};

export default UserAvatar;