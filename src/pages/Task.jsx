import React from "react";
import { useState } from "react";
import { useContext } from "react";
import tasksContext from "../contexts/TaskContext";




export default function Task({dataa}) {
  const {deleteData,updateData} = useContext(tasksContext)

  const [showEdit, setShowEdit] = useState(true);
  const [modifiedTitle, setModifiedTitle] = useState(dataa.title)
  const [modifiedTask, setModifiedTask] = useState(dataa.task)

  
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
          <p>{dataa.title}</p>
          <h3>To Do</h3>
          <p>{dataa.task}</p>
          <div>
            <button className="btn-delete" onClick={() => { deleteData(dataa)} }>
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
        <button className="btn-update" onClick={()=>handelShowEdit(dataa.id)} >Update</button>
      </form>
    </div>
      )}
    </div>
  );
}
