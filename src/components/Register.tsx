import React, { ReactElement } from "react";
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  Input,
  Text,
} from "@chakra-ui/react";

const Register = (): ReactElement => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      textAlign={"center"}>
      <Text>Sou novo cliente</Text>

      <Flex
        as={"form"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        padding={4}>
        <Input type={"text"} placeholder='Nome:' />
        <Input type={"text"} placeholder='Email:' />
        <Input type={"text"} placeholder='Senha:' />
        <Input type={"text"} placeholder='Confirmar senha:' />
        <Button textTransform={"uppercase"} width={"100%"}>
          cadastrar
        </Button>
        <CheckboxGroup>
          <Checkbox>Concordo com os Termos de Uso</Checkbox>
          <Checkbox>Concordo com a Política de Privacidade</Checkbox>
        </CheckboxGroup>
      </Flex>
    </Flex>
  );
};

export default Register;
