import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import { Heading } from "@chakra-ui/react";
import Layout from "@components/Layout";
import ProductHead from "@components/ProductHead";
import { PersonalChefIcon, PersonalSnackIcon } from "@theme/icons";

interface Props {}

export default function Product(props: Props): ReactElement {
  const { query } = useRouter();
  // console.log(personalChefIcon);
  return (
    <Layout background={"brand.salmon.100"} color={"brand.pink"}>
      <Heading size={"4xl"}>Reservar atendimento</Heading>
      <ProductHead product={"Personal Chef"} icon={<PersonalChefIcon />} />
      <ProductHead product={"Personal Chef"} icon={<PersonalSnackIcon />} />
      <div>=D</div>
    </Layout>
  );
}

{
  /* <div>{JSON.stringify(query.product, null, 2)}</div>; */
}
