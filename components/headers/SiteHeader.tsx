"use client";

import { Container, Flex } from "@mantine/core";
import Logo from "from/components/Logo";
import HeaderMenuItem from "./HeaderMenuItem";
import OutlineButton from "from/ui/buttons/OutlineButton";

const SiteHeader = () => {
  return (
    <Container size={"xl"}>
      <Flex p={"sm"} align={"center"} justify={"space-between"}>
        <Flex align={"center"} columnGap={15}>
          <Logo mr={"md"} />
          <HeaderMenuItem item={{ title: "Find a Job", href: "/" }} />
          <HeaderMenuItem item={{ title: "Find a Company", href: "/" }} />
        </Flex>
        <OutlineButton buttonstyle="normal">For Employers</OutlineButton>
      </Flex>
    </Container>
  );
};

export default SiteHeader;
