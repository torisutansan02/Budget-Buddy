import React from 'react';
import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import '../styles/index.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="form-container">
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      <input className="email" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
      <input className="password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
      <button className="userauth" disabled={isLoading}>
        Log In
      </button>
      {error && <div className="error">{error}</div>}
    </form>
    </div>
  );
};

export default Login;
