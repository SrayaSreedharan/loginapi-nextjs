"use client"; 
import axios from 'axios';
import { useState } from 'react';

export default function LoginForm() {
  const [message, setMessage] = useState('');

  const[userData,setuserData] = useState({username:'',password:''})

  const handleInputChange = (e)=>{
    const {name,value} = e.target
    setuserData(prev => ({...prev,[name]:value}))
  }

  const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage('');

  try {
    const response = await axios.post('/api/auth/login',userData)
    setMessage(response.data.message); 
    console.log(response.data);
  } catch (error) {
    console.error('Login failed:', error);
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <input type="text" placeholder="Username" value={username} name='username' onChange={handleInputChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"/>
        <input type="password" placeholder="Password" value={password} name='password' onChange={handleInputChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"/>
        <button type="submit" className="w-full bg-black text-white py-2 rounded-lg">
          Login
        </button>
      </form>
    </div>
  );
}

