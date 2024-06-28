import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

const Layout = ({children, onLogout}) => {
    
    const [isLoggedin, setIsLoggedIn] = useState(false);
   
    useEffect ( ()=> {
        const checkLoginStatus = () => {
            const StorageItems = localStorage.getItem('LoginDetails');
            const StorageItemsParse = JSON.parse(StorageItems);
            setIsLoggedIn(!!StorageItemsParse);
            console.log('is logged in: ',isLoggedin)
            }
         
            const setTimer = setTimeout( checkLoginStatus, 5000);

            return () => clearTimeout(setTimer)
            
            
        },[isLoggedin])
        
        console.log(onLogout.value);
  return (
    <div className="container">
        {isLoggedin && <Sidebar />}
        <div className="main-content">
            {isLoggedin && <Header onLogout={onLogout} /> }
            <div className="content">
                {children}
            </div>
        </div>
    </div>
  )
}

export default Layout