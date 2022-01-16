import { Flex } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import Header from "./Header";

interface Props {
  children: ReactElement | ReactElement[];
  slider: boolean;
}

export default function Layout({ children, slider }: Props): ReactElement {
  return (
    <Flex
      w={"100%"}
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}>
      <Header slider={slider} />
      {children}
    </Flex>
  );
}
