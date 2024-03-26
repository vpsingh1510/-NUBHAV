import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css'; // Import CSS file for styling

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-header">
          <h2 className="text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        <form className="login-form" action="#" method="POST">
          <div className="login-input">
            <input id="email-address" 
            name="email" type="email" 
            autoComplete="email" 
            required placeholder="Email address" />
          </div>
          <div className="login-input">
            <input id="password" 
            name="password" 
            type="password" 
            autoComplete="current-password" 
            required placeholder="Password" />
          </div>
          <div>
            <button type="submit" 
            className="login-button">
              Sign in
            </button>
          </div>
        </form>
        <div className="login-link">
          <Link to="/signup" className="font-medium">
            Don't have an account? Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
