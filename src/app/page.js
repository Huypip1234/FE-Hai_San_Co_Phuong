"use client";

import CustomImage from "@/components/custom/CustomImage";
import banner from "../../public/images/banner.jpg";
import bannerMobile from "../../public/images/banner-mobile.png";
import ProductItem from "@/app/ProductItem";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import useResponsive from "@/hook/useResponsive";
import useMounted from "@/hook/useMounted";
import { useStore } from "@/context";
import ProductSkeleton from "@/components/custom/CustomSkeleton/ProductSkeleton";

export default function Home() {
  const { width } = useResponsive();
  const { allProduct, fetchAllProduct, handleSearch, isLoadingAllProduct } =
    useStore();
  const { isMounted } = useMounted();

  useEffect(() => {
    Aos.init({
      duration: 1000,
      // offset: 200,
      /* easing: "ease-in-sine", */
      once: true,
    });
    window.scrollTo(0, 0);
    handleSearch("");
  }, []);

  useEffect(() => {
    if (allProduct.length === 0) {
      isMounted && fetchAllProduct();
    }
  }, [isMounted]);

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
        src={bannerMobile}
        className="w-full rounded-lg sm:hidden"
      />

      <div className="max-w-[1100px] mx-auto my-[2rem] ">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[1rem] sm:gap-[1.5rem] ">
          {isLoadingAllProduct
            ? [...new Array(12)].map((_item, index) => (
                <ProductSkeleton key={index} />
              ))
            : allProduct?.map((item, index) =>
                width < 640 && index < 4 ? (
                  <ProductItem data={item} key={item?._id} />
                ) : (
                  <ProductItem
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    data={item}
                    key={item?._id}
                  />
                )
              )}
        </div>
        {/* <div className="flex justify-end mt-[2rem]">
          <CustomPagination defaultCurrent={1} total={50} responsive />
        </div> */}
      </div>
    </div>
  );
}
