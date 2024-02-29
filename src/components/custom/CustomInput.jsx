import { Input } from "antd";
import React from "react";

const CustomInput = ({ size = "large", ...props }) => {
  return <Input size={size} {...props} />;
};

export default CustomInput;
