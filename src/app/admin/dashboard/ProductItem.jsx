import React, { useState } from "react";
import CustomConfirm from "@/components/custom/CustomConfirm";
import CustomImage from "@/components/custom/CustomImage";
import CustomButton from "@/components/custom/CustomButton";
import { deleteProduct } from "@/api/product";
import { toastError, toastSuccess } from "@/utils/toast";
import useMounted from "@/hook/useMounted";
import { useStore } from "@/context";
import Link from "next/link";
import { removeImage } from "@/api/image";

const ProductItem = ({ data }) => {
  const { isMounted } = useMounted();
  const { fetchAllProduct } = useStore();
  const [loading, setLoading] = useState(false);

  const onDelete = async () => {
    setLoading(true);
    const publicId = data?.image?.public_id;
    try {
      await removeImage(publicId);
    } catch (err) {
      toastError("Lỗi xoá ảnh");
      console.log(err);
      setLoading(false);
      return;
    }

    try {
      const response = await deleteProduct(data?._id);
      toastSuccess(response?.data?.message);
      isMounted && (await fetchAllProduct());
      setLoading(false);
    } catch (err) {
      err.response && err.response.status != 404
        ? toastError(err.response.data.message)
        : toastError(err.message);
      setLoading(false);
    }
  };
  return (
    <div className="grid grid-cols-9 gap-[1rem]">
      <div className="relative col-span-3 w-full aspect-square border-[2px] border-secondary border-solid">
        <Link href={`/admin/edit/${data?._id}`}>
          <CustomImage
            fill
            alt="product"
            src={data?.image?.url}
            className="object-cover object-center"
          />
        </Link>
      </div>

      <div className="col-span-4">
        <Link href={`/admin/edit/${data?._id}`}>
          <h2 className="text-secondary text-[16px] font-[700] three_dot_2_line">
            {data?.title}
          </h2>
        </Link>
        <p className="text-primary font-[500] text-[16px] ">
          {data?.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ/kg
        </p>
      </div>
      <div className="col-span-2">
        <CustomConfirm
          title="Xóa sản phẩm này"
          description="Bạn chắc chắn muốn xóa?"
          onConfirm={onDelete}
          // onCancel={cancel}
          cancelText="Không"
          okText="Có"
          okButtonProps={{ type: "primary", danger: true }}
        >
          <CustomButton loading={loading} size="small" type="primary" danger>
            Xóa
          </CustomButton>
        </CustomConfirm>
      </div>
    </div>
  );
};

export default ProductItem;
