"use client";

import CustomButton from "@/components/custom/CustomButton";
import star from "../../../../public/images/star.png";
import { Divider } from "antd";
import React from "react";
import ProductItem from "./ProductItem";
import Link from "next/link";
import CustomImage from "@/components/custom/CustomImage";
import CustomConfirm from "@/components/custom/CustomConfirm";

const DashBoard = () => {
  return (
    <div className="admin-container py-[1rem]">
      <div className="flex flex-col items-center">
        <Link href="/" className="inline-block">
          <CustomImage
            src={star}
            alt="star"
            className="w-[5.5rem] mx-auto mb-[-0.5rem]"
          />
          <h1 className="text-primary font-[700] text-[18px] sm:text-[24px] stroke-slate-50">
            Hải Sản Cô Phương
          </h1>
        </Link>
        <h2 className="text-secondary text-[28px] sm:text-[42px] font-[700] uppercase">
          Trang quản lý
        </h2>
      </div>

      <div className="mt-[1rem] flex justify-between items-center">
        <CustomButton type="primary" className="bg-primary">
          Thêm sản phẩm
        </CustomButton>
        <CustomConfirm
          title="Đăng xuất"
          description="Bạn chắc chắn muốn đăng xuất?"
          // onConfirm={confirm}
          // onCancel={cancel}
          cancelText="Không"
          okText="Có"
          okButtonProps={{ type: "primary", danger: true }}
        >
          <CustomButton size="middle" type="default" danger>
            Đăng xuất
          </CustomButton>
        </CustomConfirm>
      </div>
      <Divider />
      <div className="flex flex-col gap-[1rem]">
        {[...new Array(10)].map((_item, index) => (
          <ProductItem key={index} />
        ))}
      </div>
    </div>
  );
};

export default DashBoard;
