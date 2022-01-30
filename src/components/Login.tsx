import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import {
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useBoolean,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = (): ReactElement => {
  const [showPassword, setShowPassword] = useBoolean();
  const { push, query } = useRouter();

  console.log(query);

  return (
    <Flex
      background={"white"}
      color={"brand.pink"}
      minWidth={"400px"}
      position={"relative"}
      zIndex={0}>
      <Flex
        as={"form"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        width={"100%"}
        height={"100%"}
        background={"white"}
        textAlign={"center"}
        zIndex={0}
        padding={4}>
        <Text margin={4} color={"brand.red"} fontWeight={"bold"}>
          Já sou cadastrado
        </Text>
        <Input type={"email"} placeholder='Email:' margin={2} />
        <InputGroup size='md' margin={2}>
          <Input
            pr='4.5rem'
            type={showPassword ? "text" : "password"}
            placeholder='Senha'
          />
          <InputRightElement width='4.5rem'>
            <IconButton
              aria-label='Mostrar senha'
              icon={showPassword ? <FaEyeSlash /> : <FaEye />}
              background={"transparent"}
              _hover={{
                background: "transparent",
                color: "brand.red",
              }}
              _focus={{
                outline: 0,
              }}
              _active={{
                background: "transparent",
              }}
              onClick={setShowPassword.toggle}
            />
          </InputRightElement>
        </InputGroup>
        <Button
          width={"100%"}
          margin={2}
          variant={"button"}
          onClick={() => push(`/agenda/${query.next}`)}>
          entrar
        </Button>
      </Flex>
      <Flex
        width={"100%"}
        height={"100%"}
        position={"absolute"}
        top={"5px"}
        right={"5px"}
        borderWidth={"2px"}
        borderColor={"brand.pink"}
        zIndex={-1}
      />
    </Flex>
  );
};

export default Login;
