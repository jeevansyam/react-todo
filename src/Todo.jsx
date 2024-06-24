import React, {useState} from 'react';
import './App.css';

function Todo() {

    const [inputVal, setInputVal] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [eIndex, setEIndex] = useState();
    const [eIndexVal, setIndexVal] = useState();
    
    const inputHandle = (e) => {
        setInputVal(e.target.value)
    }
    const submitHandler = (e, index) => {
        e.preventDefault();
        if( inputVal.trim() !== ''){
            setTodoList([...todoList, inputVal.trim()])
            todoList.find(fItem => fItem == inputVal.trim());
            console.log(eIndexVal);
        }
        setInputVal('');
    }
    const itemDelete = (indexItem) => {
        setTodoList(todoList.filter((todoItem,item)=> item !== indexItem ));
        console.log(typeof objTodoList);
    }
   const itemEdit = (indexItem, todoItem) => {
        console.log(indexItem, todoItem);
        setInputVal(todoItem);
        setEIndex(indexItem);
        
   }
  return (
    <div className="todo-container">
        {/* <h1>My To-Do List</h1>
        <form onSubmit={submitHandler} id="todo-form">
            <input type="text" placeholder="Add a new task..." onChange={inputHandle} value={inputVal} />
            <button type="submit">Add</button>
        </form>
        <ul id="todo-list">
          {
            todoList.map( (todoItem, index) => {
                return(
                    <li key={index}>
                        {todoItem}
                        <span onClick={ ()=> itemEdit(index, todoItem)}>Edit</span>
                        <span onClick={ ()=> itemDelete(index, todoItem)}>Delete</span>
                    </li>
                )
            })
          }
        </ul> */}
    </div>
  )
}

export default Todo