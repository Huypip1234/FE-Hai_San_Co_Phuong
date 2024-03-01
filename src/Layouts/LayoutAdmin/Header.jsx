import CustomButton from "@/components/custom/CustomButton";
import CustomConfirm from "@/components/custom/CustomConfirm";
import CustomImage from "@/components/custom/CustomImage";
import Link from "next/link";
import React from "react";
import star from "../../../public/images/star.png";
import CustomInput from "@/components/custom/CustomInput";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col items-center">
        <Link href="/" className="inline-block">
          <CustomImage
            src={star}
            alt="star"
            className="w-[5.5rem] mx-auto mb-[-0.5rem]"
          />
          <h1 className="text-primary font-[700] text-[18px] stroke-slate-50">
            Hải Sản Cô Phương
          </h1>
        </Link>
        <h2 className="text-secondary text-[28px] font-[700] uppercase">
          Trang quản lý
        </h2>
      </div>

      <div className="mt-[1rem] flex justify-between items-center">
        <Link href="/admin/create">
          <CustomButton type="primary" size="middle" className="bg-primary">
            Thêm mặt hàng
          </CustomButton>
        </Link>

        <CustomConfirm
          title="Đăng xuất"
          description="Bạn chắc chắn muốn đăng xuất?"
          onConfirm={() => {
            router.push("/admin");
          }}
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
      {/*  <Divider /> */}

      <div className="sticky shadow-md mx-[-16px] mt-[0.5rem] p-[16px] top-[0rem] py-[0.6rem] bg-white z-[99]">
        <CustomInput.Search
          size="large"
          placeholder="Đang tìm gì?"
          enterButton
        />
      </div>
    </>
  );
};

export default Header;
