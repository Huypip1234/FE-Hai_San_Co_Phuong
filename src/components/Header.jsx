import React from "react";
import CustomSearch from "./custom/CustomSearch";
import Link from "next/link";

const Header = () => {
  return (
    <div
      className="layout-container grid grid-cols-3 py-[0.5rem] items-center
    "
    >
      <Link href="/">
        <h1 className="text-primary font-[800] text-[28px] stroke-slate-50">
          Hải Sản Cô Phương
        </h1>
      </Link>
      <CustomSearch size="large" placeholder="Bạn đang tìm gì?" enterButton />
    </div>
  );
};

export default Header;
