"use client";
import React from "react";
import star from "../../../public/images/star.png";
import CustomInput from "@/components/custom/CustomInput";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { toastError, toastSuccess } from "@/utils/toast";
import CustomForm from "@/components/custom/CustomForm";
import { login } from "@/api/auth";
import { useStore } from "@/context";
import Link from "next/link";
import CustomImage from "@/components/custom/CustomImage";
import CustomButton from "@/components/custom/CustomButton";

const Admin = () => {
  const router = useRouter();
  const { setUserLoginData } = useStore();

  const onLogin = async (data) => {
    const loginData = {
      userName: data.userName,
      password: data.password,
    };
    try {
      const response = await login(loginData);
      console.log(response);
      setUserLoginData(response.data);
      localStorage.setItem("token", response?.data?.token);
      router.push("/admin/dashboard");
      toastSuccess(response.data.message);
    } catch (err) {
      err.response && err.response.status != 404
        ? toastError(err.response.data.message)
        : toastError(err.message);
    }
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
        <CustomForm
          onFinish={onLogin}
          layout="vertical"
          name="login"
          className="w-full"
        >
          <CustomForm.Item
            label="Họ và tên"
            name="userName"
            rules={[
              {
                required: true,
                message: "Chỗ này chưa nhập!",
              },
            ]}
          >
            <CustomInput
              prefix={<UserOutlined className="text-slate-500" />}
              placeholder="Nhập họ và tên"
            />
          </CustomForm.Item>
          <CustomForm.Item
            label="Số bí mật"
            name="password"
            rules={[
              {
                required: true,
                message: "Chỗ này chưa nhập!",
              },
            ]}
          >
            <CustomInput.Password
              prefix={<LockOutlined className="text-slate-500" />}
              placeholder="Nhập số bí mật"
            />
          </CustomForm.Item>
          <CustomForm.Item className="flex justify-center">
            <CustomButton
              htmlType="submit"
              className="bg-primary"
              type="primary"
            >
              Vào trong
            </CustomButton>
          </CustomForm.Item>
        </CustomForm>
      </div>
    </div>
  );
};

export default Admin;
