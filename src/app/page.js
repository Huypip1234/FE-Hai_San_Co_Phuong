"use client";

import CustomImage from "@/components/custom/CustomImage";
import banner from "../../public/images/banner.jpg";
import ProductItem from "@/components/ProductItem";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 200,
      /* easing: "ease-in-sine",
      once: true, */
    });
  }, []);
  return (
    <div className="layout-container mt-[1rem]">
      <CustomImage
        alt="banner"
        quality={100}
        src={banner}
        className="w-full rounded-lg"
      />

      <div className="my-[2rem] grid grid-cols-4 gap-[1.5rem] max-w-[1100px] mx-auto">
        {[...new Array(24)].map((_item, index) => (
          <ProductItem
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="100"
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
