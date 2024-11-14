import React from 'react';
import { useUserContext } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoggedIn } = useUserContext();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default ProtectedWrapper;