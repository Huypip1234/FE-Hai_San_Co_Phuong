"use client";

import CustomButton from "@/components/custom/CustomButton";
import CustomForm from "@/components/custom/CustomForm";
import CustomImage from "@/components/custom/CustomImage";
import CustomInput from "@/components/custom/CustomInput";
import { DollarOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import star from "../../../../public/images/star.png";
import CustomUpload from "@/components/custom/CustomUpload";
import { toastError, toastSuccess } from "@/utils/toast";
import CustomInputNumber from "@/components/custom/CustomInputNumber";
import { useRouter } from "next/navigation";
import { addProduct } from "@/api/product";
import { useStore } from "@/context";
import useMounted from "@/hook/useMounted";

const Create = () => {
  const [urlImage, setUrlImage] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { fetchAllProduct } = useStore();
  const { isMounted } = useMounted();

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

  // convert base64
  const convertBase64 = (file) => {
    // eslint-disable-next-line no-undef
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  /* on change */
  const handleUpload = async (data) => {
    const base64 = await convertBase64(data?.file?.originFileObj);
    setUrlImage(base64);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    !localStorage.getItem("token") && router.push("/admin");
  }, []);

  const onSubmit = async (inputData) => {
    setLoading(true);
    const data = {
      title: inputData.title,
      price: inputData.price,
      description: inputData.description,
      image: urlImage,
    };
    try {
      const response = await addProduct(data);
      toastSuccess(response?.data?.message);
      isMounted && fetchAllProduct();
      router.push("/admin/dashboard");
      setLoading(false);
    } catch (err) {
      err.response && err.response.status != 404
        ? toastError(err.response.data.message)
        : toastError(err.message);
      setLoading(false);
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
          onFinish={onSubmit}
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
                  <PlusOutlined />
                  <p>Chọn hình ảnh</p>
                </button>
              )}
            </CustomUpload>
          </CustomForm.Item>
          {/* title */}
          <CustomForm.Item
            label="Tên mặt hàng"
            name="title"
            rules={[
              {
                min: 4,
                message: "Ít nhất 4 ký tự!",
              },
              {
                max: 50,
                message: "Nhiều nhất 50 ký tự!",
              },
              {
                required: true,
                message: "Chỗ này chưa nhập!",
              },
            ]}
          >
            <CustomInput
              showCount
              maxLength={50}
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
            <CustomInputNumber
              prefix={<DollarOutlined className="text-slate-500" />}
              placeholder="Nhập giá trị"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
              className="w-full"
            />
          </CustomForm.Item>
          {/* Description */}
          <CustomForm.Item
            label="Mô tả"
            name="description"
            rules={[
              {
                min: 4,
                message: "Ít nhất 4 ký tự!",
              },
              {
                max: 1000,
                message: "Nhiều nhất 1000 ký tự!",
              },
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
              loading={loading}
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
