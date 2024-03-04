import { Input } from "antd";
import React from "react";

const CustomInput = ({ size = "large", ...props }) => {
  return <Input size={size} {...props} />;
};

const PasswordInput = ({ size = "large", ...props }) => (
  <Input.Password size={size} {...props} />
);
CustomInput.Password = PasswordInput;

const SearchInput = ({ className, ...props }) => (
  <Input.Search className={"custom-search " + className} {...props} />
);
CustomInput.Search = SearchInput;

const TextAreaInput = ({ className, size = "large", ...props }) => (
  <Input.TextArea
    size={size}
    className={"custom-textarea " + className}
    {...props}
  />
);
CustomInput.TextArea = TextAreaInput;

export default CustomInput;
