"use client";

import CustomButton from "@/components/custom/CustomButton";
import CustomImage from "@/components/custom/CustomImage";
import { Divider } from "antd";
import React, { useEffect } from "react";

const ProductDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="layout-container">
      <div className="max-w-[1100px] mx-auto max-md:flex-col flex my-[2rem] gap-[1rem] sm:gap-[2rem]">
        <div className=" md:basis-1/2">
          <div className="relative w-full aspect-square border-[2px] border-secondary border-solid">
            <CustomImage
              fill
              alt="product"
              src="/images/test.jpg"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="md:basis-1/2">
          <h2 className="text-secondary text-[24px] sm:text-[32px] font-[700]">
            Mực khô vân đồn
          </h2>

          <p className="text-primary font-[500] text-[18px] sm:text-[24px]">
            300,000đ/kg
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
            <p className="mt-[0.5rem] max-sm:text-[14px] text-slate-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
              consectetur excepturi explicabo minima pariatur nobis maxime
              tenetur, doloribus, nihil provident deserunt odit corporis magnam,
              harum aut! Voluptatum architecto repellendus voluptas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
