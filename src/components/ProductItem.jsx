import React from "react";
import CustomImage from "./custom/CustomImage";

const ProductItem = () => {
  return (
    <div>
      <div className="relative w-full h-[256px]">
        <CustomImage
          src="/images/test.jpg"
          alt="product"
          fill
          className=" object-cover object-center"
        />
      </div>

      <div>
        <h2>Mực khô</h2>
        <p>300,000đ</p>
      </div>
    </div>
  );
};

export default ProductItem;
