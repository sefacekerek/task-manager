import { createContext } from "react";
import { useState } from "react";
import { createData, deleteDataById, listData, updateById } from "../apiRequests/ApiRequest";


const tasksContext = createContext();

function ContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [id, setId] = useState(1);

  const listDatas = async () => {
    const response = await listData();
    console.log(response.data);
    console.log("senin amks")
    setData(response.data);
  };

  const onCreate = async (title, task) => {
    setId(id + 1);
    const response = await createData(title, task);
    return setData([...data, response.data]);
  };

  const deleteData = async (element) => {
    console.log(element.id);
    await deleteDataById(element.id);
    const arr = data.filter((e) => e.id != element.id);
    setData(arr);
  };

  const updateData = async (id, modifiedTitle, modifiedTask) => {
    const response = await updateById(id, modifiedTitle, modifiedTask);
    console.log(response.data);

    const updatedData = data.map((item) => {
      if (item.id == id) {
        console.log({ id: id, title: modifiedTitle, task: modifiedTask });
        return { id: id, title: modifiedTitle, task: modifiedTask };
      }
      return item;
    });

    return setData(updatedData);
  };

  const sharedValueAndMethods = {
    data,
    onCreate,
    deleteData,
    updateData,
    listDatas
  };

  return <tasksContext.Provider value={sharedValueAndMethods}>{children}</tasksContext.Provider>;

}
export {ContextProvider}
export default tasksContext




