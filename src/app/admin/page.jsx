"use client";
import CustomImage from "@/components/custom/CustomImage";
import Link from "next/link";
import React from "react";
import star from "../../../public/images/star.png";
import { Form } from "antd";
import CustomInput from "@/components/custom/CustomInput";
import CustomButton from "@/components/custom/CustomButton";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { toastSuccess } from "@/utils/toast";

const Admin = () => {
  const router = useRouter();
  const onLogin = () => {
    router.push("/admin/dashboard");
    toastSuccess("Đăng nhập thành công!");
  };

  return (
    <div className="admin-container sm:h-screen flex flex-col items-center justify-center py-[1rem]">
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
        <h2 className="text-secondary text-[32px] sm:text-[42px] mt-[0.5rem] font-[700] uppercase">
          Trang quản lý
        </h2>
      </div>

      <div className="mt-[2rem] w-full">
        <Form
          onFinish={onLogin}
          layout="vertical"
          name="add_project"
          className="w-full"
        >
          <Form.Item
            label="Họ và tên"
            name="userName"
            rules={[
              {
                required: true,
                message: "Chỗ này chưa được nhập!",
              },
            ]}
          >
            <CustomInput
              prefix={<UserOutlined className="text-slate-500" />}
              placeholder="Nhập họ và tên"
            />
          </Form.Item>
          <Form.Item
            label="Số bí mật"
            name="password"
            rules={[
              {
                required: true,
                message: "Chỗ này chưa được nhập!",
              },
            ]}
          >
            <CustomInput
              prefix={<LockOutlined className="text-slate-500" />}
              placeholder="Nhập số bí mật"
            />
          </Form.Item>
          <Form.Item className="flex justify-center">
            <CustomButton
              htmlType="submit"
              className="bg-primary"
              type="primary"
            >
              Vào trong
            </CustomButton>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Admin;
