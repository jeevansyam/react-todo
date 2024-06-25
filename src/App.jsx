import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import TodoComp from './components/TodoComp'


function App() {

const [isLoggedIn, setIsLoggedIn] = useState(false)

useEffect(()=>{
  const localStItem = localStorage.getItem('logindetail')
  if(localStItem){
    try{
      const localParse = JSON.parse(localStItem);
      if(localParse.username){
        setIsLoggedIn(true)
      }
    }
    catch(error){
      console.log('Error Parsing local store item', error)
    }
  }
},[]);
console.log(isLoggedIn)

  return (
  <Router>
      <Routes>
        <Route exact path='/' element={<Login />}></Route>
        <Route path='/dashboard' element={isLoggedIn ? <TodoComp /> : <Navigate to='/login' /> }></Route>
        <Route path='/*' element={<Navigate to='/login' />} />
      </Routes>
  </Router>
  )
}

export default App
