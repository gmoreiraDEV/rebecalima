import { Flex, Heading, Text } from "@chakra-ui/react";
import Layout from "@components/Layout";
import Schedule from "@components/Schedule";
import Services from "@components/Services";

export default function Home() {
  return (
    <Layout slider={true}>
      <Services id='servicos' />
      <Schedule id='agenda' />
    </Layout>
  );
}
