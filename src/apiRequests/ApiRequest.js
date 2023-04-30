import axios from "axios";

export const createData = async (title, task) => {
  const response = await axios.post("http://localhost:3004/data", {
    title,
    task,
  });
  console.log(response);
  return response;
};

export const listData = async () => {
  const response = await axios.get("http://localhost:3004/data");
  return response;
};

export const deleteDataById = async (id) => {
  return await axios.delete("http://localhost:3004/data/" + id);
};

export const updateById = async (id, title, task) => {
  const response = await axios.put("http://localhost:3004/data/" + id, {
    title,
    task,
  });
  return response;
};
