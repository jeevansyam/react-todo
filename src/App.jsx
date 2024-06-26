import React, { useEffect, useState } from 'react'
import './App.css'
import './assets/css/theme.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import TodoComp from './components/TodoComp'
import Dashboard from './Dashboard'
import UserLogin from './components/UserLogin'
import Layout from './components/parts/Layout'
import MyAccount from './components/MyAccount'
import Users from './components/Users'
import UserTodos from './components/UserTodos'
import UserPortfolio from './components/UserPortfolio'
import UserAlbums from './components/UserAlbums'


const App = () => {
const [isLoggedin, setIsLoggedIn] = useState(false);
const handleLogin = (value) => {
  setIsLoggedIn(value)
}
const handleLogout = (value) => {
  setIsLoggedIn(value)
}

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
  } catch(error){ 
    `Parsing error ${error}`;
    // setIsLoggedIn(false); // Handle parsing error by setting isLoggedIn to false
  }
},[])
// console.log(isLoggedin)
  return (
   <Router>
    <Layout onLogout={handleLogout} >
      <Routes>
        {/* Public routes */}
         {!isLoggedin && <Route path='/' element={<UserLogin onLogin={handleLogin} />} />}

        {/* Private routes */}
        {isLoggedin && ( 
          <>
          <Route path='/todo' element={ <TodoComp  />} />
          <Route path='/dashboard' element={ <Dashboard /> } />
          <Route path='/myaccount' element={ <MyAccount /> } />
          <Route path='/mytasks' element={ <TodoComp /> } />
          <Route path='/users' element={ <Users /> } />
          <Route path='/users/:id' element={ <UserTodos /> } />
          <Route path='/users/:id/albums' element={ <UserAlbums /> } />
          <Route path='/users/:userId/albums/:albumId' element={ <UserPortfolio /> } />
          <Route path='/' element={ <Dashboard /> } />
          </>)
        }

        {/* Redirect to login for unknown paths */}
        <Route path='*' element={ <Navigate to={'/'} />} />
      </Routes>
    </Layout>
   </Router>
  )
}

export default App
