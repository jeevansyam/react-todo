import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

const Layout = ({children, onLogout}) => {
    
    const [isLoggedin, setIsLoggedIn] = useState(false);
   
    useEffect ( ()=> {
        
            const StorageItems = localStorage.getItem('LoginDetails');
            const StorageItemsParse = JSON.parse(StorageItems);
            setIsLoggedIn(!!StorageItemsParse);
            
        },[onLogout])
        
  return (
    <div className="container">
        {isLoggedin && <Sidebar />}
        <div className="main-content">
            {isLoggedin && <Header   onLogout={onLogout} /> }
            <div className="content">
                {children}
            </div>
        </div>
    </div>
  )
}

export default Layout