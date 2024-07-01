import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { json } from "react-router-dom";


const Users = () => {
    const [usersList, setUsersList] = useState([]);
    const [filterdUsersList, setFilteredUsersList] = useState([]);
    const [filterInput, setFilterInput] = useState('');
    

    const filterHandle = (event) => {
        const eventValue = event.target.value
        setFilterInput(eventValue);


        if(eventValue !== ''){
            const filterResults = usersList.filter(
                user => (
                    user.name.toLocaleLowerCase().includes(eventValue.toLocaleLowerCase()) ||
                    user.email.toLocaleLowerCase().includes(eventValue.toLocaleLowerCase()) ||
                    user.username.toLocaleLowerCase().includes(eventValue.toLocaleLowerCase()) 
                )
            )
            setFilteredUsersList(filterResults)
        }
        else{
            setFilteredUsersList(usersList)

        }
    }
    useEffect ( ()=> {

        fetch('https://jsonplaceholder.typicode.com/users')
        .then( response => response.json())
        .then(json => {
            setUsersList(json)
            setFilteredUsersList(json)
        })
        
    },[])
  return (
    <div className="todo-container">
        <h2>Users</h2>
        <div className="userFilters">
            <input type="text" value={filterInput} placeholder="Search.." onChange={filterHandle} />
        </div>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Todo List</th>
                    <th>Portfolio</th>
                </tr>
            </thead>
            <tbody>
                {
                    filterdUsersList &&
                    filterdUsersList.map( user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td><Link to={`/users/${user.id}`}>Todo List</Link></td>
                                <td><Link to={`/users/${user.id}/albums`}>Portfolio</Link></td>
                        </tr>
                        )
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default Users