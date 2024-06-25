import React from 'react';
import '../../App.css';

function Header() {
  return (
    <header>
        <div className="logo">Logo</div>
        <div className="rightOptions">
            <button>Logout</button>
        </div>
    </header>
  )
}

export default Header