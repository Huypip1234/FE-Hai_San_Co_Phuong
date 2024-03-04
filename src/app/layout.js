import "@/styles/globals.css";
import "@/styles/custom/antd-custom.css";
import { ConfigProvider } from "antd";
import Layout from "@/Layouts";
import { GoogleAnalytics } from "@next/third-parties/google";
import StoreProvider from "@/context";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Hải Sản Cô Phương",
  description: "Chuyên đồ hải sản từ Hạ Long",
};

export default function RootLayout({ children }) {
  return (
    <>
      <StoreProvider>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#F26C4F",
            },
          }}
        >
          <html lang="en">
            <body>
              <Layout>{children}</Layout>
            </body>
            {/* Vercel Speed Insights */}
            <SpeedInsights />
            {/* Vercel Analytics */}
            <Analytics />
            {/* Google Analytics */}
            <GoogleAnalytics gaId="G-5JCE19WNL6" />
          </html>
        </ConfigProvider>
      </StoreProvider>
    </>
  );
}
