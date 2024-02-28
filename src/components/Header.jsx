import React, { useState } from "react";
import CustomSearch from "./custom/CustomSearch";
import Link from "next/link";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import CustomImage from "./custom/CustomImage";
import star from "../../public/images/star.png";

const Header = () => {
  const [isShowSearch, setIsShowSearch] = useState(false);
  return (
    <div
      className="sticky top-0 z-50 bg-white shadow-lg py-[0.5rem]
    "
    >
      <div className="layout-container flex justify-between sm:grid-cols-2 sm:grid lg:grid-cols-3  items-center ">
        <div className={`${isShowSearch && "max-sm:hidden"}`}>
          <Link href="/" className="inline-block">
            <CustomImage
              src={star}
              alt="star"
              className="w-[5.5rem] mx-auto mb-[-0.5rem]"
            />
            <h1 className="text-primary font-[700] text-[18px] sm:text-[24px] stroke-slate-50">
              Hải Sản Cô Phương
            </h1>
          </Link>
        </div>
        <SearchOutlined
          onClick={() => {
            setIsShowSearch(true);
          }}
          className={`${isShowSearch && "max-sm:hidden"} sm:hidden text-[20px]`}
        />
        <div
          className={`${
            !isShowSearch && "max-sm:hidden"
          } max-sm:w-full flex items-center gap-[0.5rem]`}
        >
          <CustomSearch
            size="large"
            placeholder="Bạn đang tìm gì?"
            enterButton
            focus={true}
          />
          <CloseOutlined
            onClick={() => {
              setIsShowSearch(false);
            }}
            className="sm:hidden text-[20px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
