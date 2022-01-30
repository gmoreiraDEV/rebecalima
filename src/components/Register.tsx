import React, { ReactElement } from "react";
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useBoolean,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/router";

const Register = (): ReactElement => {
  const [showPassword, setShowPassword] = useBoolean();
  const [confirmShowPassword, setConfirmShowPassword] = useBoolean();
  const { push, query } = useRouter();
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
          Sou novo cliente
        </Text>
        <Input type={"text"} placeholder='Nome:' margin={2} />
        <Input type={"text"} placeholder='Email:' margin={2} />
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

        <InputGroup size='md' margin={2}>
          <Input
            pr='4.5rem'
            type={confirmShowPassword ? "text" : "password"}
            placeholder='Confirmar Senha'
          />
          <InputRightElement width='4.5rem'>
            <IconButton
              aria-label='Mostrar senha'
              icon={confirmShowPassword ? <FaEyeSlash /> : <FaEye />}
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
              onClick={setConfirmShowPassword.toggle}
            />
          </InputRightElement>
        </InputGroup>

        <Button
          textTransform={"uppercase"}
          width={"100%"}
          variant={"button"}
          margin={2}
          onClick={() => push(`/agenda/${query.next}`)}>
          cadastrar
        </Button>
        <Flex alignSelf={"flex-start"} flexDirection={"column"}>
          <CheckboxGroup>
            <Checkbox>
              Concordo com os <strong>Termos de Uso</strong>
            </Checkbox>
            <Checkbox>
              Concordo com a <strong>Política de Privacidade</strong>
            </Checkbox>
          </CheckboxGroup>
        </Flex>
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

export default Register;
