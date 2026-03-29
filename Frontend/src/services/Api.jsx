import axios from "axios";

const API = "http://localhost:3000/api";

export const sendTask = async (input) => {
  const res = await axios.post(`${API}/task`, { input });
  return res.data;
};

export const getHistory = async () => {
  const res = await axios.get(`${API}/history`);
  return res.data;
};