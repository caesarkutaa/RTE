import axios from "axios";
const BASE_URL = "https://rte-server.onrender.com";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: false,
});
export const getMusic = async () => {
  const response = await axios.get("/song/");
  return response.data;
};
