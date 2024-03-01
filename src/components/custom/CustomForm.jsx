import { Form } from "antd";
import React from "react";

const CustomForm = ({ children, ...props }) => {
  return <Form {...props}>{children}</Form>;
};

const FormItem = ({ children, ...props }) => (
  <Form.Item {...props}>{children}</Form.Item>
);
CustomForm.Item = FormItem;

export default CustomForm;
