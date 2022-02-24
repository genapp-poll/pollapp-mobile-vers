import axios from "axios";

const host = "http://localhost:4000/api";

export const setToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const call = async (method, path, data) => {
  const response = await axios[method](`${host}/${path}`, data);
  return response.data;
  //same as axios.method but cant use . cause of notation //method refers to get,post so like axios.post
};

export default { call, setToken };
