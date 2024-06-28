import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className="sidebar">
            <ul className="menu">
                <li className="menu-item"><Link to={'/dashboard'}>Dashboard</Link></li> 
                <li className="menu-item"><Link to={'/myaccount'}>My Account</Link></li> 
                <li className="menu-item"><Link to={'/mytasks'}>My Tasks</Link></li> 
            </ul>
    </div>
  )
}

export default Sidebar