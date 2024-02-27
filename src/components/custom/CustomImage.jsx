import Image from "next/image";
import { useEffect, useState } from "react";

const CustomImage = ({ src, defaultImage, alt = "error", ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      src={imgSrc || "/images/logo-main.png"}
      onError={() => {
        setImgSrc(defaultImage || "/images/logo-main.png");
      }}
      alt={alt}
      {...props}
    />
  );
};

export default CustomImage;
