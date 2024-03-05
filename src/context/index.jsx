"use client";

import { getAllProduct } from "@/api/product";
import { toastError } from "@/utils/toast";
import { createContext, useContext, useState } from "react";

const storeContext = createContext();

/* Export context (to "useStore()" instead of "storeContext()") */
export const useStore = () => useContext(storeContext);

const StoreProvider = ({ children }) => {
  const [userLoginData, setUserLoginData] = useState(true);
  const [allProduct, setAllProduct] = useState([]);
  const [allProductClone, setAllProductClone] = useState([]);

  const fetchAllProduct = async () => {
    try {
      const response = await getAllProduct();
      setAllProduct(response?.data?.data);
      setAllProductClone(response?.data?.data);
    } catch (err) {
      err.response && err.response.status != 404
        ? toastError(err.response.data.message)
        : toastError(err.message);
    }
  };
  const handleSearch = (value) => {
    console.log(value);
    const filteredData = allProductClone.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setAllProduct(filteredData);
  };

  return (
    <storeContext.Provider
      value={{
        userLoginData,
        setUserLoginData,
        allProduct,
        setAllProduct,
        fetchAllProduct,
        handleSearch,
        allProductClone,
      }}
    >
      {children}
    </storeContext.Provider>
  );
};
export default StoreProvider;
