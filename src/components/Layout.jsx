"use client";
import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import useMounted from "@/hook/useMounted";
import Loading from "./Loading";
import CustomImage from "./custom/CustomImage";
import { useMediaQuery } from "react-responsive";

const Layout = ({ children }) => {
  const { isMounted } = useMounted();
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  useEffect(() => {
    console.log("isMobile", isMobile);
  }, [isMobile]);
  return (
    <>
      {!isMounted && <Loading />}
      {isMounted && (
        <CustomImage
          src="/images/call.gif"
          width={isMobile ? 70 : 100}
          height={isMobile ? 70 : 100}
          alt="call"
          className="fixed bottom-[0.5rem] sm:bottom-[1rem] right-[0.5rem] sm:right-[1rem] cursor-pointer z-[10]"
        />
      )}
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
