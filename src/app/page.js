"use client";

import CustomImage from "@/components/custom/CustomImage";
import banner from "../../public/images/banner.jpg";
import logo from "../../public/images/logo-main.png";
import ProductItem from "@/components/ProductItem";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CustomPagination from "@/components/custom/CustomPagination";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      // offset: 200,
      /* easing: "ease-in-sine", */
      once: true,
    });
  }, []);

  return (
    <div className="layout-container  mt-[1rem]">
      <CustomImage
        alt="banner"
        quality={100}
        src={banner}
        className="w-full rounded-lg max-sm:hidden"
      />

      <CustomImage
        alt="banner"
        quality={100}
        src={logo}
        className="w-full rounded-lg sm:hidden"
      />

      <div className="max-w-[1100px] mx-auto my-[2rem] ">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[1rem] sm:gap-[1.5rem] ">
          {[...new Array(24)].map((_item, index) => (
            <ProductItem
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="200"
              key={index}
            />
          ))}
        </div>
        <div className="flex justify-end mt-[2rem]">
          <CustomPagination defaultCurrent={1} total={50} responsive />
        </div>
      </div>
    </div>
  );
}
