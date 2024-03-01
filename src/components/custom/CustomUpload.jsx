import { Upload } from "antd";
import React from "react";

const CustomUpload = ({ children, ...props }) => {
  return <Upload {...props}>{children}</Upload>;
};

export default CustomUpload;
