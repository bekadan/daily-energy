import { Badge, BadgeProps, Flex, Text } from "@mantine/core";
import React, { forwardRef } from "react";

interface CustomBadgeProps extends BadgeProps {
  icon?: React.ReactNode;
  text: string;
}

const CustomBadge = forwardRef<HTMLElement, CustomBadgeProps>((props, ref) => {
  return (
    <Badge bg="#F6F3EF" c={"#1d1d1d"} {...props}>
      <Flex align={"center"} columnGap={10}>
        {props.icon && props.icon}
        <Text c={"#1d1d1d"}>{props.text}</Text>
      </Flex>
    </Badge>
  );
});

export default CustomBadge;
