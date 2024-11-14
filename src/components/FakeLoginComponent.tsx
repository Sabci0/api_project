import React, { useState } from 'react';
import { useUserContext } from '../context/UserContext';

const FakeLoginComponent: React.FC = () => {
  const { logIn } = useUserContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    logIn(username, password);
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border"
      />
      <button type="submit" className="bg-blue-500 text-white">Login</button>
    </form>
  );
};

export default FakeLoginComponent;