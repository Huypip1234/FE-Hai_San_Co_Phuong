import React from "react";
import CustomImage from "./custom/CustomImage";
import Link from "next/link";

const ProductItem = ({ ...props }) => {
  return (
    <div {...props}>
      <Link href={`/product/${1}`}>
        <div className="border-secondary border-[1px] group ">
          <div className="relative w-full aspect-square overflow-hidden">
            <CustomImage
              src="/images/test.jpg"
              alt="product"
              fill
              className=" object-cover object-center group-hover:scale-110 transition-all duration-300 ease-in-out"
            />
          </div>

          <div className="flex flex-col items-center p-[0.5rem] font-[600]">
            <h2 className="text-[16px] sm:text-[18px] text-secondary">
              Mực khô
            </h2>
            <p className="text-[14px] sm:text-[16px] text-primary">
              300,000đ/kg
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
