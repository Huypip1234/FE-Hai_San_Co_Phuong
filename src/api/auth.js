import { axiosClient } from "./config";

export const login = async (data) => {
  return await axiosClient.post("/user/login", data);
};
