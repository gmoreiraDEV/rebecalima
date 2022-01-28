import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import { Heading, Flex, Button, IconButton } from "@chakra-ui/react";
import Layout from "@components/Layout";
import ProductHead from "@components/ProductHead";
import { PersonalChefIcon, PersonalSnackIcon } from "@theme/Icons";
import { FaExchangeAlt } from "react-icons/fa";
import Login from "@components/Login";
import Register from "@components/Register";

interface Props {}

const products = [
  {
    title: "Personal Chef",
    icon: <PersonalChefIcon />,
    path: "personal-chef",
  },
  {
    title: "Personal Snack",
    icon: <PersonalSnackIcon />,
    path: "personal-snack",
  },
];

export default function Product(props: Props): ReactElement {
  const { push, query } = useRouter();
  const [productOption, setProductOption] = React.useState(false);
  const isPage = (products) => products.path === query.product;
  const setDialogProduct = () => {
    setProductOption(() => !productOption);
  };
  const changeProduct = (path) => {
    setProductOption(() => !productOption), push(`/agenda/${path}`);
  };

  return (
    <Layout background={"brand.salmon.100"} color={"brand.pink"}>
      <Heading as={"h1"} size={"4xl"}>
        Reservar atendimento
        <IconButton
          aria-label='Trocar serviço'
          icon={<FaExchangeAlt />}
          isRound
          color={"brand.pink"}
          background={"brand.salmon.500"}
          marginLeft={4}
          _focus={{
            outline: "none",
          }}
          onClick={setDialogProduct}
        />
      </Heading>

      {productOption ? (
        <Flex width={"100%"} zIndex={0}>
          {products.map(({ title, icon, path }) => {
            return (
              <Button
                variant={"withBorder"}
                key={title}
                as={"h2"}
                p={4}
                onClick={() => changeProduct(path)}>
                {title}
              </Button>
            );
          })}
        </Flex>
      ) : (
        products.filter(isPage).map(({ title, icon }) => {
          return (
            <>
              <ProductHead
                key={title}
                product={title}
                icon={icon}
                changeProduct={changeProduct}
              />
              <Flex padding={4} margin={4}>
                <Login />
                <Register />
              </Flex>
            </>
          );
        })
      )}
    </Layout>
  );
}
