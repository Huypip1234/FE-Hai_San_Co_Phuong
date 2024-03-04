"use client";
import React, { useEffect, useState } from "react";
import useMounted from "@/hook/useMounted";
import Loading from "../components/Loading";
import { usePathname } from "next/navigation";
import LayoutPrimary from "./LayoutPrimary";
import LayoutAdmin from "./LayoutAdmin";

const Layout = ({ children }) => {
  const { isMounted } = useMounted();

  const pathName = usePathname();
  const [currentLayout, setCurrentLayout] = useState(
    <LayoutPrimary>{children}</LayoutPrimary>
  );

  useEffect(() => {
    if (pathName === "/admin/dashboard") {
      setCurrentLayout(<LayoutAdmin>{children}</LayoutAdmin>);
    } else if (
      pathName === "/admin" ||
      pathName === "/admin/create" ||
      pathName.includes("/admin/edit")
    ) {
      setCurrentLayout(children);
    } else {
      setCurrentLayout(<LayoutPrimary>{children}</LayoutPrimary>);
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
