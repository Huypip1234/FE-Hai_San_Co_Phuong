import React from "react";
import CustomConfirm from "@/components/custom/CustomConfirm";
import CustomImage from "@/components/custom/CustomImage";
import CustomButton from "@/components/custom/CustomButton";

const ProductItem = () => {
  return (
    <div className="grid grid-cols-9 gap-[1rem]">
      <div className="relative col-span-3 w-full aspect-square border-[2px] border-secondary border-solid">
        <CustomImage
          fill
          alt="product"
          src="/images/test.jpg"
          className="object-cover object-center"
        />
      </div>
      <div className="col-span-4">
        <h2 className="text-secondary text-[16px] font-[700]">
          Mực khô vân đồn haha huhu hehe
        </h2>
        <p className="text-primary font-[500] text-[16px] ">300,000đ/kg</p>
      </div>
      <div className="col-span-2">
        <CustomConfirm
          title="Xóa sản phẩm này"
          description="Bạn chắc chắn muốn xóa?"
          // onConfirm={confirm}
          // onCancel={cancel}
          cancelText="Không"
          okText="Có"
          okButtonProps={{ type: "primary", danger: true }}
        >
          <CustomButton size="small" type="primary" danger>
            Xóa
          </CustomButton>
        </CustomConfirm>
      </div>
    </div>
  );
};

export default ProductItem;
