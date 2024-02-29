import useMounted from "@/hook/useMounted";
import React from "react";
import { FacebookFilled, TikTokFilled } from "@ant-design/icons";
import Link from "next/link";

const Footer = () => {
  const { isMounted } = useMounted();
  return (
    <div className="bg-slate-100 mt-[5rem]">
      <div className="layout-container py-[3rem]">
        <div className="grid grid-cols-1 gap-[1rem] md:grid-cols-2 items-center">
          <div>
            <h1 className="text-primary font-[700] text-[18px] sm:text-[24px]">
              Hải Sản Cô Phương
            </h1>
            <div className="mt-[0.5rem] flex flex-col gap-[0.5rem]">
              <p className=" text-[14px] sm:text-[16px]">
                <span className="font-[500]">Địa chỉ:</span> Tổ 6A, khu 7,
                phường Cao Xanh, thành phố Hạ Long, tỉnh{" "}
                <Link href="/admin">Quảng Ninh.</Link>
              </p>
              <p className=" text-[14px] sm:text-[16px]">
                <span className="font-[500]">Số điện thoại:</span> 0387635874 -
                0787323572
              </p>
              <p className="text-[14px] sm:text-[16px]">
                <span className="font-[500]">Email:</span>{" "}
                haisancophuong.ngon@gmail.com
              </p>
              <div className="flex gap-[0.5rem]">
                <a
                  href="https://www.tiktok.com/@haisancophuong"
                  target="_blank"
                >
                  <TikTokFilled className="text-[28px]" />
                </a>
                <a
                  href="https://www.facebook.com/haisancophuong1974/"
                  target="_blank"
                >
                  <FacebookFilled className="text-[28px]" />
                </a>
              </div>
            </div>
          </div>

          {isMounted && (
            <div>
              <div id="fb-root"></div>
              <script
                async
                defer
                crossOrigin="anonymous"
                src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v19.0&appId=411097243526646"
                nonce="dN8soO0F"
              ></script>
              <div
                className="fb-page"
                data-href="https://www.facebook.com/haisancophuong1974/"
                data-tabs=""
                data-width=""
                data-height=""
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote
                  cite="https://www.facebook.com/haisancophuong1974/"
                  className="fb-xfbml-parse-ignore"
                >
                  <a href="https://www.facebook.com/haisancophuong1974/">
                    Hải Sản Cô Phương
                  </a>
                </blockquote>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
