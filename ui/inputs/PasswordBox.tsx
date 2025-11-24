import { PasswordInput, PasswordInputProps } from "@mantine/core";
import { forwardRef } from "react";

interface PasswordBoxProps extends PasswordInputProps {}

const PasswordBox = forwardRef<HTMLInputElement, PasswordBoxProps>(
  (props, ref) => {
    return <PasswordInput ref={ref} {...props} />;
  }
);

export default PasswordBox;
