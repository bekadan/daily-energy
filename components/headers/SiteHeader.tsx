"use client";

import { Container, Flex } from "@mantine/core";
import Logo from "from/components/Logo";
import HeaderMenuItem from "./HeaderMenuItem";

const SiteHeader = () => {
  return (
    <Container size={"xl"}>
      <Flex p={"sm"} align={"center"} justify={"space-between"}>
        <Flex align={"center"} columnGap={15}>
          <Logo mr={"md"} />
          <HeaderMenuItem item={{ title: "Find a Job", href: "/" }} />
          <HeaderMenuItem item={{ title: "Find a Company", href: "/" }} />
        </Flex>
      </Flex>
    </Container>
  );
};

export default SiteHeader;
