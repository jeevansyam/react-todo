import React, { useEffect, useState } from 'react';
import { v4 as uuidV4} from 'uuid';


const NewTodoList = () => {
    const [todoArr, setTodoArr] = useState([]);
    const [addInput, setAddInput] = useState({
        id:'',
        fullName: '',
        username: '',
        password: ''
    });
    const {fullName, username, password} = addInput;
    const addInputHandler = (e) => {
        const {name, value} = e.target;
        setAddInput( prevState => ({
            ...prevState, 
            [name] : value
        }) )
    }
    const formHandler = (e) => {
        e.preventDefault();
        if( fullName !== '' && username !== '' && password !== '' ){
                setTodoArr( prevState =>   [...prevState, {id: uuidV4(), fullName: fullName, username: username, password: password}])
                if(todoArr.length > 0){
                    localStorage.setItem('todoList', JSON.stringify(todoArr))
                }
                else {
                    localStorage.removeItem('todoList')
                }
                setAddInput({
                    id:'',
                    fullName: '',
                    username: '',
                    password: ''
                });
                
            
        }
        else{
            console.log("Input fiels are empty!")
        }

    }

    useEffect( () => {
            const StoredTodoList = localStorage.getItem('todoList');
                if(StoredTodoList){
                    const parsedTodoList = JSON.parse(StoredTodoList)
                    try {
                            if(Array.isArray(parsedTodoList) && parsedTodoList.length > 0){
                                setTodoArr(parsedTodoList);
                            }
                    }
                    catch(error){`JSON parsing error:  ${error}`}
                }
                
            }, [])
   
    useEffect( ()=> {
        if(todoArr.length > 0){
            localStorage.setItem('todoList', JSON.stringify(todoArr))
        }
        else{
            localStorage.removeItem('todoList')
        }
    },[todoArr])
  return (
    <div className='todo-container'>
        <form onSubmit={formHandler}>
            <input type="text" name="fullName" placeholder='Enter your name' value={fullName} onChange={addInputHandler}/>
            <input type="text" name="username" placeholder='Enter Username' value={username} onChange={addInputHandler}/>
            <input type="text" name="password" placeholder='Enter Password' value={password} onChange={addInputHandler}/>
            <button type="submit">Add</button>
        </form>
        {
           todoArr.length !== 0 ? (
            <ul>
                {
                todoArr.map( item => (
                    <li key={item.id}>{item.fullName} {item.username} {item.password}</li>
                ))
                }
            </ul>
           ):
           (<p>No Records found</p>)
        }
    </div>
  )
}

export default NewTodoList