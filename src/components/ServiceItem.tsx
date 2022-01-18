import { ReactElement } from "react";
import { Flex, Image, Text } from "@chakra-ui/react";

interface Props {
  title: String;
  content: String;
  alignment?: String;
  picture?: String;
  video?: String;
}

const ServiceItem = ({
  title,
  content,
  alignment,
  picture,
  video,
}: Props): ReactElement => {
  return (
    <Flex
      flexDirection={alignment === "right" || undefined ? "row-reverse" : "row"}
      justifyContent={"space-around"}
      alignItems={"center"}
      position={"relative"}
      margin={8}>
      <Flex
        direction={"column"}
        justifyContent={"center"}
        alignItems={
          alignment === "right" || undefined ? "flex-end" : "flex-start"
        }
        maxWidth={"50%"}
        color={"brand.pink"}>
        <Text as={"h3"} fontWeight={"bold"} fontSize={"2xl"}>
          {title}
        </Text>

        <Text
          fontFamily={"Roboto"}
          textAlign={
            alignment === "center"
              ? "center"
              : alignment === "right" || undefined
              ? "right"
              : "left"
          }>
          {content}
        </Text>
      </Flex>
      {picture && (
        <Flex maxWidth={"300px"} width={"300px"}>
          <Image src={`${picture}`} alt={`${title}`} width={"100%"} />
        </Flex>
      )}
      {video && <Flex>Video: {video}</Flex>}
    </Flex>
  );
};

export default ServiceItem;
