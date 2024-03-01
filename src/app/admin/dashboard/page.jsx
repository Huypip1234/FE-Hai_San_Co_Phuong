"use client";
import React from "react";
import ProductItem from "./ProductItem";

const DashBoard = () => {
  return (
    <div className="flex flex-col gap-[1rem] mt-[1.5rem]">
      {[...new Array(10)].map((_item, index) => (
        <ProductItem key={index} />
      ))}
    </div>
  );
};

export default DashBoard;
