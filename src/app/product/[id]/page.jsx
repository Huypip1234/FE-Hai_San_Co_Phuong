"use client";

import CustomButton from "@/components/custom/CustomButton";
import CustomImage from "@/components/custom/CustomImage";
import { useStore } from "@/context";
import useMounted from "@/hook/useMounted";
import { Divider } from "antd";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductDetail = () => {
  const { allProduct, fetchAllProduct, allProductClone } = useStore();
  const { isMounted } = useMounted();
  const [currentProduct, setCurrentProduct] = useState({});
  const param = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (allProduct.length === 0) {
      isMounted && fetchAllProduct();
    }
  }, [isMounted]);

  useEffect(() => {
    const id = param.id;
    const product = allProductClone.find((item) => item._id === id);
    setCurrentProduct(product);
  }, [param, allProductClone]);

  return (
    <div className="layout-container">
      <div className="max-w-[1100px] mx-auto max-md:flex-col flex my-[2rem] gap-[1rem] sm:gap-[2rem]">
        <div className=" md:basis-1/2">
          <div className="relative w-full aspect-square border-[2px] border-secondary border-solid">
            <CustomImage
              fill
              alt="product"
              src={currentProduct?.image}
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="md:basis-1/2">
          <h2 className="text-secondary text-[24px] sm:text-[32px] font-[700]">
            {currentProduct?.title}
          </h2>

          <p className="text-primary font-[500] text-[18px] sm:text-[24px]">
            {currentProduct?.price}đ/kg
          </p>
          <Divider />
          <CustomButton type="primary" className="bg-primary">
            Liên hệ: 0387635874
          </CustomButton>
          <Divider />
          <div>
            <p className="text-secondary max-sm:text-[16px] font-[600]">
              Mô tả:{" "}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: currentProduct?.description?.replace(/\n/g, "<br/>"),
              }}
              className="mt-[0.5rem] max-sm:text-[14px] text-slate-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
