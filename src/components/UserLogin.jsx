import React, { useState } from 'react'

const UserLogin = () => {
    const [inputFields, setInputFields] = useState({
        username: '',
        password: '',
    })
    const loginDetail = 'LoginDetails';
    const {username, password} = inputFields;
    const inputHandler = (e) => {
            const {name, value} = e.target;
        setInputFields( prevState => ({ ...prevState, [name]: value.trim()}) )
    }
    const formHandler =(e) => {
        e.preventDefault();
        localStorage.setItem(loginDetail, JSON.stringify(inputFields));
        setInputFields({username:'', password: ''})
    }
  return (
    <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={formHandler}>
            <div className="form-group">
                <label >Username</label>
                <input type="text" id="username" name="username" value={username} onChange={inputHandler} required />
            </div>
            <div className="form-group">
                <label >Password</label>
                <input type="password" id="password" name="password" value={password} onChange={inputHandler} required />
            </div>
            <div className="form-group">
                <button type="submit">Login</button>
            </div>
            <div className="form-group register-link">
                Don't have an account? <a href="#">Register here</a>
            </div>
        </form>
    </div>
  )
}

export default UserLogin