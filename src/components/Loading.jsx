import React from "react";
import CustomImage from "./custom/CustomImage";
import star from "../../public/images/star.png";

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center fixed inset-0 z-[99999] bg-white flex-col gap-[0.5rem]">
      {/* <CustomImage
        alt="banner"
        width={200}
        height={200}
        src={defaultImage}
        className="rounded-xl transition-all duration-300 ease-in-out animate-bounce max-sm:w-[100px] max-sm:h-[100px]"
      /> */}

      <div className="transition-all duration-300 ease-in-out animate-pulse">
        <CustomImage
          src={star}
          alt="star"
          className="w-[7rem] mx-auto mb-[-0.5rem]"
        />
        <h1 className="font-[700] text-[24px] sm:text-[36px] text-primary  ">
          Hải Sản Cô Phương
        </h1>
      </div>
    </div>
  );
};

export default Loading;
