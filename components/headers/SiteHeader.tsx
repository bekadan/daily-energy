"use client";

import { Container, Flex } from "@mantine/core";
import Logo from "from/components/Logo";

const SiteHeader = () => {
  return (
    <Container size={"xl"}>
      <Flex p={"sm"} align={"center"} justify={"space-between"}>
        <Logo />
      </Flex>
    </Container>
  );
};

export default SiteHeader;
