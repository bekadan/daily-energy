import { Button, ButtonProps } from "@mantine/core";
import { forwardRef } from "react";

interface SubmitButtonProps extends ButtonProps {}

const SubmitButton = forwardRef<HTMLButtonElement, SubmitButtonProps>(
  (props, ref) => {
    return <Button color="#1d1d1d" c={"#ffffff"} ref={ref} {...props} />;
  }
);

export default SubmitButton;
