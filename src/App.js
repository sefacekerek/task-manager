import { useContext, useEffect } from "react";
import "./App.css";
import TaskCreate from "./pages/TaskCreate";
import TaskList from "./pages/TaskList";
import tasksContext from "./contexts/TaskContext";

function App() {
  const { listDatas } = useContext(tasksContext);

  useEffect(() => {
   
    listDatas();
  }, []);

  return (
    <div className="App"> 
        <TaskCreate></TaskCreate>
        <TaskList></TaskList>   
    </div>
  );
}

export default App;
