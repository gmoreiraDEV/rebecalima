import { ReactElement } from "react";
import { Flex, Text } from "@chakra-ui/react";
import SocialContact from "./SocialContact";

const Footer = (): ReactElement => {
  return (
    <Flex
      as={"footer"}
      justifyContent={"space-around"}
      alignItems={"center"}
      width={"100%"}
      padding={8}
      color={"brand.blue"}
      background={"brand.pink"}>
      <Text textTransform={"uppercase"}>
        <strong>Rebeca Lima ©</strong> todos os direitos reservados
      </Text>
      <SocialContact />
    </Flex>
  );
};

export default Footer;
