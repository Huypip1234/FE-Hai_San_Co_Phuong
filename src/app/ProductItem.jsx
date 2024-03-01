import React from "react";
import CustomImage from "../components/custom/CustomImage";
import Link from "next/link";

const ProductItem = ({ ...props }) => {
  return (
    <div {...props}>
      <Link href={`/product/${1}`}>
        <div className=" group rounded-lg">
          <div className="relative w-full aspect-square overflow-hidden rounded-t-lg border-[1px] border-secondary">
            <CustomImage
              src="/images/test.jpg"
              alt="product"
              fill
              className=" object-cover object-center group-hover:scale-110 transition-all duration-300 ease-in-out"
            />
          </div>

          <div className="flex rounded-b-lg flex-col border-slate-300 border-x border-b items-center p-[0.5rem] font-[600]">
            <h2 className="text-[14px] text-center sm:text-[18px] text-secondary">
              Mực khô vân đồn haha huhu hehe hoho...
            </h2>
            <p className="text-[14px] mt-[0.5rem] font-[500] sm:text-[16px] text-primary">
              300,000đ/kg
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
