import { Flex, Heading, Text } from "@chakra-ui/react";
import Layout from "@components/Layout";
import Services from "@components/Services";

export default function Home() {
  return (
    <Layout slider={true}>
      <Services />
      <Flex height='1200px' border='1px solid #2200ff' id='agenda'>
        Agenda
      </Flex>
    </Layout>
  );
}
