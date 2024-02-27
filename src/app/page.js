"use client";

import CustomImage from "@/components/custom/CustomImage";
import banner from "../../public/images/banner.png";
import ProductItem from "@/components/ProductItem";

export default function Home() {
  return (
    <div className="layout-container mt-[1rem]">
      <CustomImage
        alt="banner"
        quality={100}
        src={banner}
        className="w-full rounded-lg"
      />

      <div className="my-[2rem] grid grid-cols-6 gap-[1rem]">
        {[...new Array(24)].map((_item, index) => (
          <ProductItem key={index} />
        ))}
      </div>
    </div>
  );
}
