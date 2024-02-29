import { message } from "antd";

export const toastSuccess = (content) => {
  message.open({
    type: "success",
    content: content,
  });
};

export const toastError = (content) => {
  message.open({
    type: "error",
    content: content,
  });
};

export const toastWarning = (content) => {
  message.open({
    type: "warning",
    content: content,
  });
};
