import { Button } from "antd";
import React from "react";

const CustomButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default CustomButton;
