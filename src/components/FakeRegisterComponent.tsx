import React, { useState } from 'react';

const FakeRegisterComponent: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // Implement registration logic, save to db.json

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Save new user to db.json
  };

  return (
    <form onSubmit={handleRegister}>
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
      <button type="submit" className="bg-blue-500 text-white">Register</button>
    </form>
  );
};

export default FakeRegisterComponent;