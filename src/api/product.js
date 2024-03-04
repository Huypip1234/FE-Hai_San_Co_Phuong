import { axiosClient } from "./config";

export const getAllProduct = async () => {
  return await axiosClient.get("/product/all");
};
