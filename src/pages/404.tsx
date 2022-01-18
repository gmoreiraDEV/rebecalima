import { useRouter } from "next/router";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";

import SocialContact from "@components/SocialContact";

export default function Custom404() {
  const { push } = useRouter();
  return (
    <Flex
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      height={"100vh"}
      background={"brand.salmon.500"}
      color={"brand.pink"}
      position={"relative"}
      zIndex={1}>
      <Heading size={"4xl"}>Ooops, algo deu errado!</Heading>
      <Text fontWeight={"bold"}>Procurando por algo em específico?</Text>
      <Text fontWeight={"bold"}>
        Pode ser que encontre em um desses lugares.
      </Text>
      <SocialContact dark={true} margin={8} />
      <Text margin={4} fontWeight={"bold"}>
        e se mesmo assim não encontrar, você sempre pode voltar para o início
      </Text>
      <Button
        variant={"withBorderDark"}
        width={"300px"}
        onClick={() => push("/")}>
        VOLTAR AO INÍCIO
      </Button>
    </Flex>
  );
}
