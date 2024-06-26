import React, { useEffect, useState } from 'react';
import {v4 as uuidV4} from 'uuid';
import  TodoListObj  from '../data/TodoListData'
import Header from './parts/Header';
import { redirect, useNavigate } from 'react-router-dom';

   

function TodoComp() {
    const [searchVal, setSearchVal] = useState('');
    const [todoList, setTodolist] = useState(TodoListObj);
    const [popup, openPopup] = useState(false);
    const [issueNo, setIssueNo]= useState('');
    const [taskName, setTaskName] = useState('');
    const navigate = useNavigate()
    
    const searchHandle = (e) => {
        setSearchVal(e.target.value.trim());
    }

    const TodoItems = searchVal ?
        todoList.filter( todo => 
        todo.taskName.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase()) 
        ):
        todoList;

    const addTaskHandle = () => {
        openPopup(!popup);
    }
    const formHandle = (e) => {
        e.preventDefault();
        const addTodo = {
            _id : uuidV4(),
            issueNo: issueNo,
            taskName: taskName,
            status: false
        }
        setTodolist([...todoList, addTodo]);
        openPopup(false)
    }
    const formInput = (e) => {
       const {name, value} = e.target;
       if(name === 'issueNo'){
        setIssueNo(value)
       }
       else if(name === 'taskName'){
        setTaskName(value)
       }
    }
    const isLogHandle = (value) => {
        if(value === true){
            return redirect('/login')
            console.log('success');
        }
    }
  return (
    <div className='container'>
        <Header isLog={isLogHandle} />
        <div className="search">
            <input type="text" placeholder='Search task' value={searchVal} onChange={searchHandle}  />
            <button 
                type="button"
                onClick={addTaskHandle}
            >Add New Task</button>
        </div>
        <br />
        <div className='todo-container'>
            <table>
                <thead>
                    <tr>
                        <th><input type='checkbox' /></th>
                        <th>Issue ID</th>
                        <th>Task Name</th>
                        <th>Status</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        TodoItems.length > 0 ?
                        TodoItems.map( todo => {
                            return(
                                <tr key={todo._id}>
                                    <td> <input type="checkbox" /> </td>
                                    <td> {todo.issueNo} </td>
                                    <td> {todo.taskName} </td>
                                    <td> Edit </td>
                                    <td> Delete </td>
                                </tr>
                            )
                        }) :
                        <tr>
                            <td colSpan={6}>No Data Found</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
        { popup && 
            <div className="popup">
                <div className="close" onClick={addTaskHandle}></div>
                <div className="popup_header">
                    <h2>Add New Task</h2>
                </div>
                <div className="popup_body">
                    <form onSubmit={formHandle}>
                        <label htmlFor="">
                            <span>Issue No:</span>
                            <input type="text" name='issueNo' onChange={formInput} />
                        </label>
                        <label htmlFor="">
                            <span>Task Name:</span>
                            <input type="text" name='taskName' onChange={formInput} />
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        }
        { popup && <div className="popup_overlay"></div> }
    </div>
  )
}

export default TodoComp