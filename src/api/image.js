import { axiosClient } from "./config";

export const uploadImage = async (data) => {
  return await axiosClient.post("/images/upload", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const removeImage = async (id) => {
  return await axiosClient.delete(`/images/remove/${id}`);
};
