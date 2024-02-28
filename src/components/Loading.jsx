import React from "react";
import CustomImage from "./custom/CustomImage";
import { defaultImage } from "@/constants";

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center fixed inset-0 z-[99999] bg-white">
      <CustomImage
        alt="banner"
        width={200}
        height={200}
        src={defaultImage}
        className="rounded-full transition-all duration-300 ease-in-out animate-bounce"
      />
    </div>
  );
};

export default Loading;
