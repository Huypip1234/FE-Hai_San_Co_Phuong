"use client";

import CustomButton from "@/components/custom/CustomButton";
import CustomForm from "@/components/custom/CustomForm";
import CustomImage from "@/components/custom/CustomImage";
import CustomInput from "@/components/custom/CustomInput";
import {
  DollarOutlined,
  EditOutlined,
  LoadingOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import React, { useState } from "react";
import star from "../../../../public/images/star.png";
import CustomUpload from "@/components/custom/CustomUpload";
import { toastError } from "@/utils/toast";

const Create = () => {
  const [loading, setLoading] = useState(false);

  const [urlImage, setUrlImage] = useState("");
  const [fileList, setFileList] = useState([]);

  /* before upload */
  const beforeUpload = (file) => {
    const isJpgOrPng =
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/jpg";
    if (!isJpgOrPng) {
      toastError("Không đúng định dạng ảnh");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      toastError("Ảnh phải nhỏ hơn 2MB");
    }
    return isJpgOrPng && isLt2M;
  };

  /* on change */
  const handleUpload = async ({ fileList: newFileList }) => {
    setFileList(newFileList);
    if (newFileList.length > 0) {
      if (
        newFileList[newFileList.length - 1].originFileObj &&
        newFileList[newFileList.length - 1].status === "uploading"
      ) {
        setUrlImage(
          URL.createObjectURL(newFileList[newFileList.length - 1].originFileObj)
        );
      }
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
        <h2 className="text-secondary text-[28px] sm:text-[36px] mt-[0.5rem] font-[700] uppercase">
          Thêm mặt hàng
        </h2>
      </div>

      <div className="mt-[2rem] w-full">
        <CustomForm
          disabled={false}
          // onFinish={onLogin}
          layout="vertical"
          name="create"
          className="w-full"
        >
          {/* Upload Image */}
          <CustomForm.Item
            label="Hình ảnh"
            name="image"
            rules={[
              {
                required: true,
                message: "Chưa chọn ảnh!",
              },
            ]}
          >
            <CustomUpload
              listType="picture-card"
              showUploadList={false}
              onChange={handleUpload}
              beforeUpload={beforeUpload}
            >
              {urlImage ? (
                <CustomImage
                  src={urlImage}
                  width={500}
                  height={500}
                  alt="upload-img"
                />
              ) : (
                <button type="button">
                  {loading ? <LoadingOutlined /> : <PlusOutlined />}
                  <p>Chọn hình ảnh</p>
                </button>
              )}
            </CustomUpload>
          </CustomForm.Item>
          {/* Name */}
          <CustomForm.Item
            label="Tên mặt hàng"
            name="name"
            rules={[
              {
                required: true,
                message: "Chỗ này chưa nhập!",
              },
            ]}
          >
            <CustomInput
              showCount
              maxLength={20}
              prefix={<EditOutlined className="text-slate-500" />}
              placeholder="Nhập tên mặt hàng"
            />
          </CustomForm.Item>
          {/* Price */}
          <CustomForm.Item
            label="Giá trị"
            name="price"
            rules={[
              {
                required: true,
                message: "Chỗ này chưa nhập!",
              },
            ]}
          >
            <CustomInput
              prefix={<DollarOutlined className="text-slate-500" />}
              placeholder="Nhập giá trị"
            />
          </CustomForm.Item>
          {/* Description */}
          <CustomForm.Item
            label="Mô tả"
            name="description"
            rules={[
              {
                required: true,
                message: "Chỗ này chưa nhập!",
              },
            ]}
          >
            <CustomInput.TextArea
              showCount
              maxLength={1000}
              rows={4}
              placeholder="Nhập mô tả mặt hàng"
            />
          </CustomForm.Item>
          {/* Submit button */}
          <CustomForm.Item className="flex justify-center">
            <CustomButton
              htmlType="submit"
              className="bg-primary"
              type="primary"
            >
              Thêm ngay
            </CustomButton>
          </CustomForm.Item>
        </CustomForm>
      </div>
    </div>
  );
};

export default Create;
