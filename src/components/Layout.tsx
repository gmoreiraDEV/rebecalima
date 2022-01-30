import { useStyleConfig, Flex, FlexProps } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props): ReactElement => {
  const { slider, children, ...rest } = props;

  return (
    <Flex
      {...rest}
      w={"100%"}
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}>
      <Header slider={slider} />
      {children}
      <Footer />
    </Flex>
  );
};
3;

export default Layout;
