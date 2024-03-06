import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CustomImage from "@/components/custom/CustomImage";
import useResponsive from "@/hook/useResponsive";

const LayoutPrimary = ({ children }) => {
  const { width } = useResponsive();
  return (
    <>
      <a href="tel:0387635874">
        <CustomImage
          src="/images/call.gif"
          width={width < 640 ? 70 : 100}
          height={width < 640 ? 70 : 100}
          alt="call"
          className="fixed bottom-[0.5rem] sm:bottom-[1rem] right-[0.5rem] sm:right-[1rem] cursor-pointer z-[10]"
        />
      </a>

      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutPrimary;
