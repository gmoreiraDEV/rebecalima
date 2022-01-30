import { Flex, Heading } from "@chakra-ui/react";
import Layout from "@components/Layout";
import LoginWithSocial from "@components/LoginWithSocial";
import LoginComponent from "@components/Login";
import RegisterComponent from "@components/Register";
import React from "react";

type Props = {};

const Login = (props: Props) => {
  return (
    <Layout background={"brand.salmon.100"} color={"brand.pink"}>
      <Heading as={"h1"} size={"4xl"}>
        Login / Cadastro
      </Heading>
      <Flex
        flexDirection={"column"}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}>
        <LoginWithSocial />
        <Flex
          padding={4}
          margin={4}
          width={"80%"}
          justifyContent={"space-around"}
          alignItems={"flex-start"}>
          <LoginComponent />
          <RegisterComponent />
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Login;
