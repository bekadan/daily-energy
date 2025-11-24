import { Button, ButtonProps } from "@mantine/core";
import { forwardRef } from "react";

interface OutlineButtonProps extends ButtonProps {
  buttonStyle: "black" | "normal";
}

const OutlineButton = forwardRef<HTMLButtonElement, OutlineButtonProps>(
  (props, ref) => {
    return (
      <Button
        variant="outline"
        color={props.buttonStyle === "black" ? "#1d1d1d" : "#FF9F14"}
        c={"#1d1d1d"}
        ref={ref}
        {...props}
      />
    );
  }
);

export default OutlineButton;
