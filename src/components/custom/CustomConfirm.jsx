import { Popconfirm } from "antd";
import React from "react";

const CustomConfirm = ({ children, ...props }) => {
  return <Popconfirm {...props}>{children}</Popconfirm>;
};

export default CustomConfirm;
