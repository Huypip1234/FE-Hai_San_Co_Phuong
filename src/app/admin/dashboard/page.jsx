"use client";
import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import { useStore } from "@/context";
import useMounted from "@/hook/useMounted";
import { useRouter } from "next/navigation";

const DashBoard = () => {
  const { allProduct, fetchAllProduct } = useStore();
  const { isMounted } = useMounted();
  const router = useRouter();

  useEffect(() => {
    if (allProduct.length === 0) {
      isMounted && fetchAllProduct();
    }
  }, [isMounted]);

  useEffect(() => {
    window.scrollTo(0, 0);
    !localStorage.getItem("token") && router.push("/admin");
  }, []);

  return (
    <div className="flex flex-col gap-[1rem] mt-[1.5rem]">
      {allProduct?.map((item) => (
        <ProductItem data={item} key={item._id} />
      ))}
    </div>
  );
};

export default DashBoard;
