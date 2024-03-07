import axios from "axios";

// const baseURL = "https://be-hai-san-co-phuong.onrender.com";
const baseURL = "http://localhost:3003";

export const getFromLocalStorage = (key) => {
  try {
    if (typeof window === "undefined") return null;
    const value = window.localStorage.getItem(key);
    if (!value) return null;
    return value;
  } catch (e) {
    return null;
  }
};

export const axiosClient = axios.create({
  baseURL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${getFromLocalStorage("token")}`,
  },
});
