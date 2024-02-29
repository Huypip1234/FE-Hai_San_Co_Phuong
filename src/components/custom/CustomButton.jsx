import { Button } from "antd";
import React from "react";

const CustomButton = ({ size = "large", children, ...props }) => {
  return (
    <Button size={size} {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;
