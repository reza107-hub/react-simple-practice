import React, { useEffect, useState } from 'react';
import './ToDo.css'
const ToDo = () => {
    const [ToDoLists,setToDoList] = useState([])
    useEffect(
        ()=>{
            fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res=>res.json())
            .then(data=> setToDoList(data))
        }
        ,[])
    return (
        <div>
            <h2>Welcome to to-do list</h2>
            <div className='to-do-style'>
                {
                    ToDoLists.map(ToDoList => <DisplayToDoList data={ToDoList} key={ToDoList.id}></DisplayToDoList>)
                }
            </div>
        </div>
    );
};
const DisplayToDoList =(props)=>{
    const {userId, id, title, completed} =props.data
    return(
        <div className='single-to-do'>
            <p>User Id : {userId}</p>
            <p>To-Do Id : {id}</p>
            <p>To-Do title : {title}</p>
            <p>To-Do completed : <span className='completed'>{completed ? 'Completed' : 'Not Completed'}</span></p>
        </div>
    )
}
export default ToDo;