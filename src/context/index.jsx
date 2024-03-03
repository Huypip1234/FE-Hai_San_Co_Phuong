"use client";

import { createContext, useContext, useState } from "react";

const storeContext = createContext();

/* Export context (to "useStore()" instead of "storeContext()") */
export const useStore = () => useContext(storeContext);

const StoreProvider = ({ children }) => {
  const [userLoginData, setUserLoginData] = useState(true);

  return (
    <storeContext.Provider
      value={{
        userLoginData,
        setUserLoginData,
      }}
    >
      {children}
    </storeContext.Provider>
  );
};
export default StoreProvider;
