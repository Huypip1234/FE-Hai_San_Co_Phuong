import "@/styles/globals.css";
import "@/styles/custom/antd-custom.css";
import { ConfigProvider } from "antd";
import Layout from "@/Layouts";

export const metadata = {
  title: "Hải Sản Cô Phương",
  description: "Chuyên đồ hải sản từ Hạ Long",
};

export default function RootLayout({ children }) {
  return (
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
      </html>
    </ConfigProvider>
  );
}
