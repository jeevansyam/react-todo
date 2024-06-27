import React, { useEffect, useState } from 'react'
import './App.css'
import Sidebar from './components/parts/Sidebar'
import Header from './components/parts/Header'
import './assets/css/theme.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TodoComp from './components/TodoComp'
import Dashboard from './Dashboard'
import UserLogin from './components/UserLogin'


const App = () => {
const [isLoggedin, setIsLoggedIn] = useState(false)

useEffect( ()=> {
  const StoredLogin = localStorage.getItem('LoginDetails');
  const StoredLoginParse = JSON.parse(StoredLogin);
  try {
    if(StoredLoginParse){
      setIsLoggedIn(true)
    }
    else{
      setIsLoggedIn(false)
    }
  } catch(error){ `Parsing error ${error}`}
},[])
  return (
    <div className="container">
      {isLoggedin && <Sidebar />}
      <div className="main-content">
      {isLoggedin && <Header /> }
          <div className="content">
          
              <Router>
                <Routes>
                  {
                    isLoggedin ? 
                    <Route path='/' element={<Dashboard />} /> 
                    :
                    <Route path='/' element={<UserLogin />} /> 
                  }
                  
                </Routes>
              </Router>
          </div>
      </div>
      {/* <NewTodoList /> */}
    </div>
  
  )
}

export default App
