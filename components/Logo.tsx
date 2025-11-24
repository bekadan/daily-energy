import { Flex, Image } from "@mantine/core";

const Logo: React.FC<{ href?: string }> = ({ href }) => {
  return (
    <Flex component="a" href={href ? href : "/"}>
      <Image src={"/logo.svg"} w={"auto"} h={32} />
    </Flex>
  );
};

export default Logo;
