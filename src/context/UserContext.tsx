import React, { createContext, useState, useContext } from 'react';

interface UserContextType {
  isLoggedIn: boolean;
  username: string;
  logIn: (username: string, password: string) => void;
  logOut: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const logIn = (username: string, password: string) => {
    // Check if user exists in db.json
    // If valid, set isLoggedIn to true and set username
    // For now, assume any username/password is valid
    setIsLoggedIn(true);
    setUsername(username);
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, username, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUserContext must be used within UserProvider');
  return context;
};