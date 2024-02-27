import { Input } from "antd";
import React from "react";

const { Search } = Input;

const CustomSearch = ({ className, ...props }) => {
  return <Search className={"custom-search " + className} {...props} />;
};

export default CustomSearch;
