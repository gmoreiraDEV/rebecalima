import { ReactElement } from "react";
import { useRouter } from "next/router";
import { Flex, Button, Heading, Text } from "@chakra-ui/react";

const Schedule = (props): ReactElement => {
  const { push } = useRouter();
  const { ...rest } = props;

  return (
    <Flex
      {...rest}
      width={"100%"}
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      background={"brand.salmon.100"}
      color={"brand.pink"}
      marginTop={8}
      padding={8}>
      <Heading size={"4xl"} marginTop={8}>
        Reservar atendimento
      </Heading>
      <Text textTransform={"uppercase"} fontWeight={"bold"}>
        o que você procura?
      </Text>

      <Flex direction={"column"} margin={4} padding={4} zIndex={1}>
        <Button
          width={"300px"}
          marginBottom={4}
          variant={"withBorderDark"}
          onClick={() => push("/login?next=personal-chef")}>
          Personal Chef
        </Button>
        <Button
          width={"300px"}
          variant={"withBorderDark"}
          onClick={() => push("/login?next=personal-snack")}>
          Personal Snack
        </Button>
      </Flex>
    </Flex>
  );
};

export default Schedule;
