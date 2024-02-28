import React from "react";
import CustomSearch from "./custom/CustomSearch";
import Link from "next/link";

const Header = () => {
  return (
    <div
      className="sticky top-0 z-50 bg-white shadow-lg py-[0.8rem]
    "
    >
      <div className="layout-container  grid grid-cols-3  items-center ">
        <div>
          <Link href="/" className="inline-block">
            <h1 className="text-primary font-[700] text-[24px] stroke-slate-50">
              Hải Sản Cô Phương
            </h1>
          </Link>
        </div>

        <CustomSearch size="large" placeholder="Bạn đang tìm gì?" enterButton />
      </div>
    </div>
  );
};

export default Header;
