import './App.css';
import TaskCreate from './pages/TaskCreate';
import TaskList from './pages/TaskList';
import { useState } from 'react';

function App() {

  const [data, setData] = useState([])
  const [id, setId] = useState(1)

  const onCreate = (title,task) => {
    console.log(title)
    console.log(task)
    console.log(data)
    setId(id+1)
    return setData([...data,{id:id,title,task}])
  }

  const deleteData =(element) => {
   const arr = data.filter((e) => e.id != element.id);
   setData(arr)
  }

  const updateData = (id,modifiedTitle,modifiedTask) =>{
  const updatedData = data.map((item)=>{
      if(item.id==id){
        console.log({id:id,title:modifiedTitle,task:modifiedTask})
        return {id:id,title:modifiedTitle,task:modifiedTask}
      }
      return item
    })
  
  return setData(updatedData)
  }

  return (
    <div className="App">
    <TaskCreate onCreate={onCreate}></TaskCreate>
    <TaskList data={data} deleteData={deleteData} updateData={updateData}></TaskList>
    </div>
  );
}

export default App;
