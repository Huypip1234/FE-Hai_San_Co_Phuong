import axios from "axios";

const baseURL = "http://localhost:3003";

export const axiosClient = axios.create({
  baseURL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
