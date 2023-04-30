import "./App.css";
import { createData, listData, deleteDataById , updateById } from "./apiRequests/ApiRequest";
import TaskCreate from "./pages/TaskCreate";
import TaskList from "./pages/TaskList";
import { useState,useEffect } from "react";



function App() {
  const [data, setData] = useState([]);
  const [id, setId] = useState(1);



  useEffect(() => {
    const listDatas = async () => {
      const response = await listData()
      console.log(response.data)
      setData(response.data);
    }
    listDatas(); 
    console.log("parametreli")
  }, [])
  
  

  const onCreate = async (title, task) => {
    setId(id + 1);   
    const response = await createData(title, task)
    return setData([...data, response.data]);
  };

  

  const deleteData =async (element) => {
    console.log(element.id)
    await deleteDataById(element.id)
    const arr = data.filter((e) => e.id != element.id);
    setData(arr);
  };

  const updateData = async (id, modifiedTitle, modifiedTask) => {

   const response  = await updateById(id,modifiedTitle,modifiedTask);
   console.log(response.data)

    const updatedData = data.map((item)=>{
      if(item.id == id){
        console.log({ id: id, title: modifiedTitle, task: modifiedTask });
        return { id: id, title: modifiedTitle, task: modifiedTask };
      }
      return item;
    })
    
    return setData(updatedData);
  };


  return (
    <div className="App">
      <TaskCreate onCreate={onCreate}></TaskCreate>
      <TaskList
        data={data}
        deleteData={deleteData}
        updateData={updateData}

      ></TaskList>
    </div>
  );
}

export default App;
