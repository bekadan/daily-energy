import { TextInput, TextInputProps } from "@mantine/core";
import { forwardRef } from "react";

interface TextBoxProps extends TextInputProps {}

const TextBox = forwardRef<HTMLInputElement, TextBoxProps>(
  (props, ref) => {
    return <TextInput ref={ref} {...props} />;
  }
);

export default TextBox;
