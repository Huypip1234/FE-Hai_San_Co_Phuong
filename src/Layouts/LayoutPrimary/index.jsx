import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CustomImage from "@/components/custom/CustomImage";
import { useMediaQuery } from "react-responsive";

const LayoutPrimary = ({ children }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  return (
    <>
      {/* {isMounted && ( */}
      <CustomImage
        src="/images/call.gif"
        width={isMobile ? 70 : 100}
        height={isMobile ? 70 : 100}
        alt="call"
        className="fixed bottom-[0.5rem] sm:bottom-[1rem] right-[0.5rem] sm:right-[1rem] cursor-pointer z-[10]"
      />
      {/*  )} */}
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutPrimary;
