import { Image } from "@chakra-ui/react";
import React, { ReactElement } from "react";

const Logo = (): ReactElement => {
  return <Image src={"/assets/img/logo.svg"} alt='Rebeca Lima' w={"130px"} />;
};

export default Logo;
