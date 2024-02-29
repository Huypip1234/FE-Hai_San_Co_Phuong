"use client";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import useMounted from "@/hook/useMounted";
import Loading from "../components/Loading";
import CustomImage from "../components/custom/CustomImage";
import { useMediaQuery } from "react-responsive";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const { isMounted } = useMounted();
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  const pathName = usePathname();
  const [currentLayout, setCurrentLayout] = useState(
    <>
      <Header />
      {children}
      <Footer />
    </>
  );

  useEffect(() => {
    if (pathName.includes("/admin")) {
      setCurrentLayout(children);
    } else {
      setCurrentLayout(
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
    }
  }, [pathName]);

  return (
    <>
      {!isMounted && <Loading />}
      {currentLayout}
    </>
  );
};

export default Layout;
