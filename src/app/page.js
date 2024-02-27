"use client";

import CustomImage from "@/components/custom/CustomImage";
import banner from "../../public/images/banner.png";

export default function Home() {
  return (
    <div className="layout-container mt-[1rem]">
      <CustomImage
        alt="banner"
        quality={100}
        src={banner}
        className="w-full rounded-lg"
      />
    </div>
  );
}
