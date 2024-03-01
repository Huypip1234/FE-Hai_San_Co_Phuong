"use client";
import React, { useEffect } from "react";
import ProductItem from "./ProductItem";

const DashBoard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col gap-[1rem] mt-[1.5rem]">
      {[...new Array(10)].map((_item, index) => (
        <ProductItem key={index} />
      ))}
    </div>
  );
};

export default DashBoard;
