import React, { ReactElement } from "react";
import { useRouter } from "next/router";

import { Flex, Link, Button } from "@chakra-ui/react";

const navigationLinks = [
  {
    title: "Início",
    link: "/",
    button: true,
  },
  {
    title: "Serviços",
    link: "#servicos",
    button: true,
  },
  {
    title: "Ebooks",
    link: "/ebooks",
    button: false,
  },
];

const Navigation = (): ReactElement => {
  const { push } = useRouter();

  return (
    <Flex as='nav'>
      {navigationLinks.map(({ title, link, button }) => {
        if (button !== true) {
          return (
            <Button
              key={title}
              background='transparent'
              color='white'
              borderRadius={0}
              textShadow={
                "-0.5px 0 white, 0 0.5px white, 0.5px 0 white, 0 -0.5px white"
              }
              letterSpacing={2}
              _hover={{
                borderBottom: "2px",
                borderBottomColor: "brand.salmon.500",
              }}>
              <Link
                href={link}
                _hover={{
                  textDecoration: "none",
                }}>
                <a>{title}</a>
              </Link>
            </Button>
          );
        } else {
          return (
            <Button
              key={title}
              background='transparent'
              color='white'
              borderRadius={0}
              textShadow={
                "-0.5px 0 white, 0 0.5px white, 0.5px 0 white, 0 -0.5px white"
              }
              letterSpacing={2}
              _hover={{
                borderBottom: "2px",
                borderBottomColor: "brand.salmon.500",
              }}
              onClick={() => push(`${link}`)}>
              {title}
            </Button>
          );
        }
      })}
    </Flex>
  );
};

export default Navigation;
