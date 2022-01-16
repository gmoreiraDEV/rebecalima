import React, { ReactElement } from "react";
import { Flex, IconButton } from "@chakra-ui/react";
import { FaInstagram, FaWhatsapp, FaRegEnvelope } from "react-icons/fa";

const dataIcons = [
  {
    title: "Instagram",
    icon: <FaInstagram />,
  },
  {
    title: "WhatsApp",
    icon: <FaWhatsapp />,
  },
  {
    title: "Email",
    icon: <FaRegEnvelope />,
  },
];

const SocialContact = (): ReactElement => {
  return (
    <Flex justifyContent='space-around' alignItems='center' gap={2}>
      {dataIcons.map(({ title, icon }) => (
        <IconButton
          key={title}
          aria-label={title}
          icon={icon}
          background='transparent'
          color='white'
          fontSize='35px'
          _hover={{
            color: "brand.salmon",
          }}
        />
      ))}
    </Flex>
  );
};

export default SocialContact;
