import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import TodoComp from './components/TodoComp'


function App() {

const [isLoggedIn, setIsLoggedIn] = useState(false)

useEffect(()=>{
  const localStItem = localStorage.getItem('logindetail');
  try{
    if(localStItem){
        const localParse = JSON.parse(localStItem);
        if(localParse.username){
          setIsLoggedIn(true)
        }
        else{
          setIsLoggedIn(false)
        }
    } else {
      setIsLoggedIn(false)
    }
  } catch(error){
    console.log('Error Parsing local store item', error)
  }
},[]);

  return (
  <Router>
      <Routes>
        <Route exact path='/login' element={ isLoggedIn ? <Navigate to={'/dashboard'} /> : <Login />  }></Route>
         <Route path='/dashboard' element={ isLoggedIn ? <TodoComp /> : <Login />}></Route>
         {/* <Route path='/*' element={ isLoggedIn ? <TodoComp /> : <Navigate to='/login' /> } /> */}
      </Routes>
  </Router>
  )
}

export default App
