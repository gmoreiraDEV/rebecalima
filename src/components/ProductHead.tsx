import { ReactElement } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import PersonalChefIcon from "@icons/PersonalChefIcon";

const ProductHead = (props): ReactElement => {
  const { product, icon } = props;
  return (
    <Flex zIndex={0}>
      <Flex
        position='relative'
        p={4}
        bg='white'
        color='brand.pink'
        fontWeight='bold'
        textAlign='center'
        textShadow='-0.5px 0 #D8A492, 0 0.5px #D8A492, 0.5px 0 #D8A492, 0 -0.5px #D8A492'
        _after={{
          content: `""`,
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "5px",
          right: "5px",
          borderWidth: "2px",
          borderColor: "brand.pink",
          zIndex: -1,
        }}>
        <Image color={"brand.pink"} src={icon} alt={product} />
        {product}
      </Flex>
    </Flex>
  );
};

export default ProductHead;
