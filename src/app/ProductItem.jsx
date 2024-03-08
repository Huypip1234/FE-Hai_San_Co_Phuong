import React from "react";
import CustomImage from "../components/custom/CustomImage";
import Link from "next/link";

const ProductItem = ({ data, ...props }) => {
  return (
    <div className="" {...props}>
      <Link href={`/product/${data?._id}`}>
        <div className=" group rounded-lg">
          <div className="relative w-full aspect-square overflow-hidden rounded-t-lg border-[1.5px] border-secondary">
            <CustomImage
              src={data?.image?.url}
              alt="product"
              fill
              className=" object-cover object-center group-hover:scale-110 transition-all duration-300 ease-in-out"
            />
          </div>

          <div className="flex rounded-b-lg flex-col border-slate-300 border-x border-b  items-center p-[0.5rem] font-[600]">
            {/*  <div className="h-[2.5rem] sm:h-[3.1rem]"> */}
            <h2 className="text-[14px] text-center sm:text-[18px] text-secondary break-all three_dot_2_line">
              {data?.title}
            </h2>
            {/* </div> */}

            <p className="text-[14px] mt-[0.5rem] font-[500] sm:text-[16px] text-primary">
              {data?.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              đ/kg
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
