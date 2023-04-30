import React from "react";
import { useState } from "react";

export default function Task({ data, deleteData, updateData }) {
  const [showEdit, setShowEdit] = useState(true);
  const [modifiedTitle, setModifiedTitle] = useState(data.title)
  const [modifiedTask, setModifiedTask] = useState(data.task)

  
  const handelTitle = (event) =>{
    setModifiedTitle(event.target.value)
  }

  const handelTask = (event) =>{
    setModifiedTask(event.target.value)
  }

  const handelShowEdit = (id) => {
    if(!showEdit){ updateData(id,modifiedTitle,modifiedTask)}
    return setShowEdit(!showEdit);
  };

 

  return (
    <div>
      {showEdit ? (
        <div className="task-list">
          <h3>Your Task</h3>
          <p>{data.title}</p>
          <h3>To Do</h3>
          <p>{data.task}</p>
          <div>
            <button className="btn-delete" onClick={() => deleteData(data)}>
              Delete
            </button>
            <button className="btn-update" onClick={() => handelShowEdit()}>
              Update
            </button>
          </div>
        </div>
      ) : (
        <div className="task-container-component">
      <h3>Please Add Task</h3>
      <form className="form-container">
        <label className="form-title" >Title</label>
        <input className="form-input"value={modifiedTitle} onChange={handelTitle}></input>
        <label className="form-task">Enter a task!</label>
        <textarea className="form-input" rows={5}  value={modifiedTask} onChange={handelTask}></textarea>
        <button className="btn-update" onClick={()=>handelShowEdit(data.id)} >Update</button>
      </form>
    </div>
      )}
    </div>
  );
}
