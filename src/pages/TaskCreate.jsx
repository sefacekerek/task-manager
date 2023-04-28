import React from "react";
import { useState } from "react";

export default function TaskCreate({onCreate}) {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");

  const handelTitle = (event) =>{
    setTitle(event.target.value)
  }

  const handelTask = (event) =>{
    setTask(event.target.value)
  }

  const handelCreateTask = (event) => {
    event.preventDefault();
    onCreate(title,task);
    setTask("");
    console.log(title)
    setTitle("");
    console.log(title)
  }

  return (
    <div className="task-container">
      <h3>Please Add Task</h3>
      <form className="form-container">
        <label className="form-title">Title</label>
        <input className="form-input" onChange={handelTitle} value={title}></input>
        <label className="form-task">Enter a task!</label>
        <textarea className="form-input" rows={5} onChange={handelTask} value={task}></textarea>
        <button className="form-button" onClick={handelCreateTask} >Create</button>
      </form>
    </div>
  );
}
