import React from "react";
import Task from "./Task";

export default function TaskList({ data, deleteData, updateData }) {
  return (
    <div className="task-list-container">
      {data.map((e, index) => (
        <Task key={index} data={e} deleteData={deleteData} updateData={updateData}></Task>
      ))}
    </div>
  );
}
