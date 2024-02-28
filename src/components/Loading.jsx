import React from "react";
import CustomImage from "./custom/CustomImage";
import { defaultImage } from "@/constants";

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center fixed inset-0 z-[99999] bg-white flex-col gap-[0.5rem]">
      <CustomImage
        alt="banner"
        width={200}
        height={200}
        src={defaultImage}
        className="rounded-xl transition-all duration-300 ease-in-out animate-bounce max-sm:w-[100px] max-sm:h-[100px]"
      />
      <p className="font-[700] text-[14px] sm:text-[24px] text-primary">
        Hải Sản Cô Phương
      </p>
    </div>
  );
};

export default Loading;
