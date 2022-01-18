import { ReactElement } from "react";
import { useRouter } from "next/router";
import { Flex, IconButton } from "@chakra-ui/react";
import { FaInstagram, FaWhatsapp, FaRegEnvelope } from "react-icons/fa";

const dataIcons = [
  {
    title: "Instagram",
    icon: <FaInstagram />,
    link: "https://instagram.com/rebecalimanutri",
  },
  {
    title: "WhatsApp",
    icon: <FaWhatsapp />,
    link: "https://wa.me/message/Q3UVRHNHRK5EB1",
  },
  {
    title: "Email",
    icon: <FaRegEnvelope />,
    link: "mailto:rebeca.limamoreira@gmail.com",
  },
];

interface Props {
  dark?: Boolean;
  margin: number;
}

const SocialContact = (props: Props): ReactElement => {
  const { push } = useRouter();
  const { dark, margin } = props;
  return (
    <Flex
      margin={margin}
      justifyContent='space-around'
      alignItems='center'
      gap={2}>
      {dataIcons.map(({ title, icon, link }) => (
        <IconButton
          key={title}
          aria-label={title}
          icon={icon}
          background='transparent'
          color={dark ? "brand.pink" : "white"}
          fontSize='35px'
          _hover={{
            color: dark ? "brand.blue" : "brand.salmon.500",
          }}
          _focus={{
            boxShadow: "none",
          }}
          onClick={() => {
            push(link);
          }}
        />
      ))}
    </Flex>
  );
};

export default SocialContact;
