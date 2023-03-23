import React, { useEffect, useState } from "react";
import "./ToDo.css";

const ToDo = () => {
  const [toDoLists, setToDoList] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setToDoList(data));
  }, []);

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      <h2>Welcome to to-do list</h2>
      <div className="to-do-style">
        {toDoLists.slice(0, showAll ? toDoLists.length : 5).map((toDoList) => (
          <DisplayToDoList data={toDoList} key={toDoList.id}></DisplayToDoList>
        ))}
      </div>
      <button onClick={handleShowMore} className='show-more'>
        {showAll ? "Show less" : "Show more"}
      </button>
    </div>
  );
};

const DisplayToDoList = (props) => {
  const { userId, id, title, completed } = props.data;
  return (
    <div className="single-to-do">
      <p>User Id : {userId}</p>
      <p>To-Do Id : {id}</p>
      <p>To-Do title : {title}</p>
      <p>
        To-Do completed :{" "}
        <span className="completed">
          {completed ? "Completed" : "Not Completed"}
        </span>
      </p>
    </div>
  );
};

export default ToDo;
