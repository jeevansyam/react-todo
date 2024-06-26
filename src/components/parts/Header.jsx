import React, { useEffect } from 'react';
import '../../App.css';
import { Navigate, redirect, useNavigate } from 'react-router-dom';

function Header({isLog}) {
    const navigate = useNavigate();
    const logoutHandler = () => {
       localStorage.removeItem('logindetail');
        navigate('/login')
        isLog(true)
    }
  return (
    <header>
        <div className="logo">Logo</div>
        <div className="rightOptions">
            <button onClick={logoutHandler}>Logout</button>
        </div>
    </header>
  )
}

export default Header