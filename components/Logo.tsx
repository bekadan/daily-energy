import { Flex, FlexProps, Image } from "@mantine/core";

const Logo: React.FC<{ href?: string } & FlexProps> = ({ href, ...props }) => {
  return (
    <Flex component="a" {...props} href={href ? href : "/"}>
      <Image src={"/logo.svg"} w={"auto"} h={32} />
    </Flex>
  );
};

export default Logo;
