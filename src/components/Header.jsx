import React from "react";
import CustomSearch from "./custom/CustomSearch";
import Link from "next/link";

const Header = () => {
  return (
    <div
      className="sticky top-0 z-50 bg-white shadow-lg py-[0.5rem]
    "
    >
      <div className="layout-container  grid grid-cols-3  items-center ">
        <Link href="/">
          <h1 className="text-primary font-[800] text-[24px] stroke-slate-50">
            Hải Sản Cô Phương
          </h1>
        </Link>
        <CustomSearch size="large" placeholder="Bạn đang tìm gì?" enterButton />
      </div>
    </div>
  );
};

export default Header;
