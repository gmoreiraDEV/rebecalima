import React, { ReactElement } from "react";
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  Input,
  Text,
} from "@chakra-ui/react";

const Login = (): ReactElement => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      textAlign={"center"}>
      <Text>Já sou cadastrado</Text>

      <Flex
        as={"form"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        padding={4}>
        <Input type={"text"} placeholder='Email:' />
        <Input type={"text"} placeholder='Senha:' />
        <Button textTransform={"uppercase"} width={"100%"}>
          entrar
        </Button>
      </Flex>
    </Flex>
  );
};

export default Login;
