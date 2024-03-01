import { InputNumber } from "antd";
import React from "react";

const CustomInputNumber = ({ size = "large", ...props }) => {
  return <InputNumber size={size} {...props} />;
};

export default CustomInputNumber;
