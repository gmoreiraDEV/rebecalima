import { useRouter } from "next/router";
import { Flex, Box, Heading, Text, Button, Image } from "@chakra-ui/react";

import Logo from "./Logo";
import Navigation from "./Navigation";
import SocialContact from "./SocialContact";
import { ReactElement } from "react";

interface Props {
  slider: boolean;
}

const Header = ({ slider }: Props): ReactElement => {
  const { push } = useRouter();
  return (
    <Flex
      w={"100%"}
      direction='column'
      position='relative'
      bgGradient={"linear(to-b, brand.red, brand.pink)"}>
      <Box
        width='100%'
        height='100%'
        bgImage='/assets/img/pattern.svg'
        position='absolute'
        opacity='0.3'
        zIndex={0}
      />
      <Flex
        direction='row'
        justifyContent='space-around'
        alignItems='center'
        p={2}
        zIndex={10}>
        <Logo />
        <Navigation />
        <SocialContact />
      </Flex>
      {slider && (
        <Flex
          direction='row'
          justifyContent='space-around'
          alignItems='center'
          minH='400px'
          p={4}
          marginTop={4}
          zIndex={10}>
          <Flex direction='column' justifyContent='center' alignItems='center'>
            <Heading
              as='h1'
              maxW='500px'
              color='white'
              size='4xl'
              lineHeight='40px'
              textAlign='center'>
              Vamos fazer a vida mais gostosa cozinhando?
            </Heading>
            <Text
              maxW='350px'
              color='white'
              letterSpacing={2}
              marginTop='4'
              textAlign='center'
              textShadow={
                "-0.5px 0 white, 0 0.5px white, 0.5px 0 white, 0 -0.5px white"
              }>
              Crio refeições personalizadas para sua rotina
            </Text>
            <Button
              variant={"withBorder"}
              marginTop={8}
              onClick={() => push("#agenda")}>
              RESERVAR ATENDIMENTO
            </Button>
          </Flex>
          <Flex maxW='500px'>
            <Image src='/assets/img/logo.svg' alt='Rebeca Lima' />
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default Header;
