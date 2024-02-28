"use client";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import useMounted from "@/hook/useMounted";
import Loading from "./Loading";
import CustomImage from "./custom/CustomImage";

const Layout = ({ children }) => {
  const { isMounted } = useMounted();
  return (
    <>
      {!isMounted && <Loading />}
      <CustomImage
        src="/images/call.gif"
        width={100}
        height={100}
        alt="call"
        className="fixed bottom-[1rem] right-[1rem] cursor-pointer "
      />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
