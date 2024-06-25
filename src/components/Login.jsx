import React, { useState } from 'react';
import UserLogins from '../data/UserLogins';

function Login() {
    const [loginDetails, setLoginDetails] = useState({
        username : '',
        password : ''
    });
    const [errMsg, setErrMsg] = useState('');
    const loginSubmitHandle = (e) => {
        e.preventDefault();
        
        const loginUserResult = 
            UserLogins.filter( 
                user => user.username.toLocaleLowerCase() === loginDetails.username.toLocaleLowerCase() &&
                        user.password === loginDetails.password
                );

                if(loginUserResult.length === 0){
                    setErrMsg('Invalid Username / password')
                }
                else{
                   localStorage.setItem("logindetail", JSON.stringify(loginDetails));
                   
                }
    };
    const inputHandle = (e) => {
        const {name, value} = e.target;
        if(name === 'userName'){
            setLoginDetails({...loginDetails, username: value})
        }
        else if(name === 'password'){
            setLoginDetails({...loginDetails, password: value})
        }
    };
  return (
    <div className='todo-container'>
        <h1>Login</h1>
        <p>{errMsg}</p>
        <form onSubmit={loginSubmitHandle}>
            <label>
                <span>Username</span>
                <input type="text" name='userName' placeholder='Enter username' value={loginDetails.username} onChange={inputHandle} />
            </label>
            <label>
                <span>Password</span>
                <input type="password" name='password' placeholder='password' value={loginDetails.password} onChange={inputHandle} />
            </label>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login