"use client";

import { getAllProduct } from "@/api/product";
import { toastError } from "@/utils/toast";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

const storeContext = createContext();

/* Export context (to "useStore()" instead of "storeContext()") */
export const useStore = () => useContext(storeContext);

const StoreProvider = ({ children }) => {
  const router = useRouter();
  const pathName = usePathname();

  const [userLoginData, setUserLoginData] = useState(true);
  const [allProduct, setAllProduct] = useState([]);
  const [allProductClone, setAllProductClone] = useState([]);
  const [isLoadingAllProduct, setIsLoadingAllproduct] = useState();
  const [noNeedReset, setNoNeedReset] = useState(false);

  const fetchAllProduct = async () => {
    setIsLoadingAllproduct(true);
    try {
      const response = await getAllProduct();
      setAllProduct(response?.data?.data);
      setAllProductClone(response?.data?.data);
      setIsLoadingAllproduct(false);
    } catch (err) {
      err.response && err.response.status != 404
        ? toastError(err.response.data.message)
        : toastError(err.message);
      setIsLoadingAllproduct(false);
    }
  };
  const handleSearch = (value) => {
    if (pathName.includes("product")) {
      setNoNeedReset(true);
      router.push("/");
    }
    const filteredData = allProductClone.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setAllProduct(!!filteredData ? filteredData : []);
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
        isLoadingAllProduct,
        noNeedReset,
        setNoNeedReset,
      }}
    >
      {children}
    </storeContext.Provider>
  );
};
export default StoreProvider;
