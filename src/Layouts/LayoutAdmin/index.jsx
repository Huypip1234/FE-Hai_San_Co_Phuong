import React from "react";
import Header from "./Header";

const LayoutAdmin = ({ children }) => {
  return (
    <div className="admin-container py-[1rem]">
      <Header />
      {children}
    </div>
  );
};

export default LayoutAdmin;
