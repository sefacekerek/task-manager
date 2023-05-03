import React from "react";
import Task from "./Task";
import { useContext } from "react";
import tasksContext from "../contexts/TaskContext";




export default function TaskList() {
  const {data} = useContext(tasksContext)
  return (
    <div className="task-list-container">
      {data.map((e, index) => (
        <Task key={index} dataa={e}></Task>
      ))}
    </div>
  );
}
