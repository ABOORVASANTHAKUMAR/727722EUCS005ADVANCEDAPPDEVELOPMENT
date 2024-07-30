import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (email.endsWith('student@akshaya.ac.in')) {
      navigate('/student-enquiry');
    } else {
      setError('Invalid email address. Please use your student email ending with "student@askaya.ac.in".');
    }
  };

  return (
    
    <div className="home-container">
      <nav className="navbar">
        <h1>AKSHAYA COLLEGE OF ENGINEERING AND TECHNOLOGY, SEERKALI</h1>
      </nav>
      <div className="login-section">
        <div className="login-box">
          <h2>Student Login</h2>
          <p>Are you a Staff/Admin? <Link to="/admin-login">Login here</Link></p>
          <p>(For better experience use Google Chrome 60 and above)</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p><Link to="/forgot-password">Forgot Password?</Link></p>
            {error && <p className="error">{error}</p>}
            <button type="button" onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
      <footer className="footer">
        <p>© 2024 AKSHAYA COLLEGE OF ENGINEERING AND TECHNOLOGY, SEERKALI. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
