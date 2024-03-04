import { axiosClient } from "./config";

export const getAllProduct = async () => {
  return await axiosClient.get("/product/all");
};

export const addProduct = async (data) => {
  return await axiosClient.post("/product/add", data);
};

export const deleteProduct = async (id) => {
  return await axiosClient.delete(`/product/delete/${id}`);
};
