// Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (userName.trim()) {
      navigate('/chat', { state: { userName: userName } });
    }
  };

  return (
    <div className="login-container">
      <h1>Bem-vindo ao Chat!</h1>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Digite seu nome..."
          className="login-input"
        />
        <button type="submit" className="login-button">
          Entrar no Chat
        </button>
      </form>
    </div>
  );
}