import React from 'react';
import { Navigate, redirect } from 'react-router-dom'

const Header = () => {
  const logoutHandle = () => {
    localStorage.removeItem('LoginDetails');
    redirect('/login')
  }
  return (
    <div className="header">
                <div className="user-info">
                    <div className="welcome-text">Welcome, User</div>
                    <img src="user-icon.png" alt="User Icon" width="20" height="20" />
                </div>
                <button className="logout-btn" onClick={logoutHandle}>Logout</button>
            </div>
  )
}

export default Header