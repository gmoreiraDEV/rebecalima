import React from "react";
import { useRouter } from "next/router";
import { Flex, Text, IconButton } from "@chakra-ui/react";
import { darken } from "@chakra-ui/theme-tools";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

const LoginWithSocial = () => {
  const { push } = useRouter();
  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      color={"brand.red"}>
      <Text fontWeight={"bold"}>
        Acesso com:{" "}
        <IconButton
          aria-label='Login com Facebook'
          rounded={"full"}
          icon={<FaFacebookF />}
          background={"brand.salmon.500"}
          _hover={{
            background: darken("brand.salmon.100", 10),
          }}
          margin={2}
          onClick={() => push("/agenda/personal-chef")}
        />
        <IconButton
          aria-label='Login com Facebook'
          rounded={"full"}
          icon={<FaGoogle />}
          background={"brand.salmon.500"}
          _hover={{
            background: darken("brand.salmon.100", 10),
          }}
          margin={2}
          onClick={() => push("/agenda/personal-chef")}
        />
      </Text>
      <Text fontWeight={"bold"}>OU</Text>
    </Flex>
  );
};

export default LoginWithSocial;
