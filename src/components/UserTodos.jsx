import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';

const UserTodos = () => {
    const [userTodo, setUserTodo] = useState([]);
    const [filterTodo, setFilterTodo] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    const checkboxHanlder = (e) => {
        console.log(e.checked)
    }
    useEffect ( ()=> {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( response => response.json())
        .then (json => {
            setUserTodo(json);
            const filter = json.filter ( todo => todo.userId === parseInt(id, 10) );
            setFilterTodo(filter)
        })
        .catch( err => console.log(`fetching data error ${err}`));

    },[id])
    const backHandler = (event) => {
        event.preventDefault();
        navigate(-1)
    }
    console.log(filterTodo)
  return (
    <div className='todo-container'>
        <Link onClick={backHandler}> Back </Link>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    filterTodo &&
                    filterTodo.map( todo => (
                        <tr key={todo.id}>
                            <td width={70}>{todo.id}</td>
                            <td>{todo.title}</td>
                            <td>
                                <input type="checkbox" 
                                    checked={todo.completed}
                                    onChange={checkboxHanlder}
                                />
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default UserTodos