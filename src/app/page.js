"use client"; 
import axios from 'axios';
import { useState } from 'react';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage('');

  try {
    const response = await axios.post('/api/auth/login', {
      username,
      password,
    });

    setMessage(response.data.message); 
    console.log(response.data);
  } catch (error) {
    const backendMsg = error.response?.data?.message;
    setMessage(backendMsg || 'Login failed');
    console.error('Login failed:', error);
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}required/>
      <button type="submit">Login</button>
      {/* {message && <p>{message}</p>} */}
    </form>
  );
}
