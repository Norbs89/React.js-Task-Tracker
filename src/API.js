import axios from "axios";

const fetchTasks = (query) => {
  return axios.get("http://localhost:5000/tasks");
};

const addToDb = (task) => {
  return axios.post("http://localhost:5000/tasks", task);
};

const DeleteFromDb = (id) => {
  return axios.delete(`http://localhost:5000/tasks/${id}`);
};

const patchReminder = (id, bool) => {
  return axios.patch(`http://localhost:5000/tasks/${id}`, { reminder: bool });
};

export { patchReminder, fetchTasks, addToDb, DeleteFromDb };
