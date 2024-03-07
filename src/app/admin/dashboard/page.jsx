"use client";
import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import { useStore } from "@/context";
import useMounted from "@/hook/useMounted";
import { useRouter } from "next/navigation";
import ProductSkeletonAdmin from "@/components/custom/CustomSkeleton/ProductSkeletonAdmin";

const DashBoard = () => {
  const { allProduct, fetchAllProduct, isLoadingAllProduct, handleSearch } =
    useStore();
  const { isMounted } = useMounted();
  const router = useRouter();

  useEffect(() => {
    if (allProduct.length === 0) {
      isMounted && fetchAllProduct();
    }
  }, [isMounted]);

  useEffect(() => {
    handleSearch("");
    window.scrollTo(0, 0);
    !localStorage.getItem("token") && router.push("/admin");
  }, []);

  return (
    <div className="flex flex-col gap-[1rem] mt-[1.5rem]">
      {isLoadingAllProduct
        ? [...new Array(4)].map((_item, index) => (
            <ProductSkeletonAdmin key={index} />
          ))
        : allProduct.length===0 ? <p>Không tìm thấy mặt hàng nào!</p> : (allProduct?.map((item) => <ProductItem data={item} key={item._id} />))}
    </div>
  );
};

export default DashBoard;
