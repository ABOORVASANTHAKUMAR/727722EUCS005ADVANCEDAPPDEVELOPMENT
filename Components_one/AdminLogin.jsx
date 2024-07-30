import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    if (email.endsWith('@akshaya.ac.in')) {
      navigate('/admin-dashboard');
    } else {
      alert('Only admins with akshaya.ac.in email can login.');
    }
  };

  const handleStudentRegistration = () => {
    if (password === confirmPassword) {
      setIsRegistered(true);
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <div className="admin-login-container">
      <nav className="navbar">
        <h1>AKSHAYA COLLEGE OF ENGINEERING AND TECHNOLOGY, SEERKALI</h1>
      </nav>
      <div className="login-box">
        {isAdmin ? (
          <>
            <h2>Admin Login</h2>
            <form>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <button type="button" onClick={handleAdminLogin}>Login</button>
            </form>
            <p >Have to register a New Student? <button onClick={() => setIsAdmin(false)}>Register here</button></p>
          </>
        ) : (
          <>
            <h2>New Enrollment</h2>
            {isRegistered ? (
              <div>
                <p>Student registered successfully! <span>&#10004;</span></p>
                <button onClick={() => setIsAdmin(true)}>Back to Admin Login</button>
              </div>
            ) : (
              <form>
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Full Name" required />
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                <button type="button" onClick={handleStudentRegistration}>Sign Up</button>
              </form>
            )}
          </>
        )}
      </div>
      <footer className="footer">
        <p>© 2024 AKSHAYA COLLEGE OF ENGINEERING AND TECHNOLOGY, SEERKALI. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AdminLogin;
