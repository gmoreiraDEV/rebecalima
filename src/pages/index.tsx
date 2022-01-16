import { Flex, Text } from "@chakra-ui/react";
import Layout from "@components/Layout";

export default function Home() {
  return (
    <Layout slider={true}>
      <Flex height='1200px' border='1px solid #ff0000' id='servicos'>
        Serviços
      </Flex>
      <Flex height='1200px' border='1px solid #2200ff' id='agenda'>
        Serviços
      </Flex>
    </Layout>
  );
}
