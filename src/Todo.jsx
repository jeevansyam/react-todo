import React, {useState} from 'react';
import './App.css';

function Todo() {

    const [searchInputVal, setSearchInputVal] = useState('');

   const TodoListObj = [
    {
        _id: 1,
        issueNo: 1124,
        taskName: 'Dropdown Issue',
        status: false
    },
    {
        _id: 2,
        issueNo: 1125,
        taskName: 'Table Alignment Issue',
        status: false
    },
    {
        _id: 3,
        issueNo: 1126,
        taskName: 'Popup',
        status: false
    },
    {
        _id: 4,
        issueNo: 1127,
        taskName: 'Button Color',
        status: false
    }
   ];
   const searchInputHandler = (e) => {
        const inVal = e.target.value;
        setSearchInputVal(inVal.trim())
        const dd = TodoListObj.filter( item => TodoListObj.includes())
        console.log(dd);
   }
  return (
    <div className="todo-container">

        <div className="filterDiv">
            <input type="text" onChange={searchInputHandler} value={searchInputVal} />
        </div>
        <br />
        <table cellPadding={5} cellSpacing={0} style={{border: '1px solid #ccc', width: '100%'}} >
            <thead>
                <tr>
                    <th>S. No</th>
                    <th>Issue ID</th>
                    <th>Task Name</th>
                    <th>Task Status</th>
                    <th colSpan={2}>Actions</th>
                </tr>
            </thead>
            <tbody>
               
            {
                TodoListObj.map( item => {
                    return(
                        <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>{item.issueNo}</td>
                            <td>{item.taskName}</td>
                            <td>{item.status}</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>


       
    </div>
  )
}

export default Todo