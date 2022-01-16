import React, { ReactElement } from "react";
import { Flex, Button as ChakraButton, Box, FlexProps } from "@chakra-ui/react";
import { forwardRef } from "@chakra-ui/system";

const Button = forwardRef<FlexProps, "div">((props, ref): ReactElement => {
  return (
    <Flex position='relative' {...props} ref={ref}>
      <ChakraButton
        textAlign='center'
        rounded='0'
        bg='white'
        color='brand.salmon'
        textShadow={
          "-0.5px 0 #D8A492, 0 0.5px #D8A492, 0.5px 0 #D8A492, 0 -0.5px #D8A492"
        }
        zIndex={10}>
        {props.children}
      </ChakraButton>
      <Box
        position='absolute'
        width='100%'
        height='100%'
        top='5px'
        left='5px'
        borderWidth='2px'
        borderColor='brand.salmon'
        zIndex={0}
      />
    </Flex>
  );
});

export default Button;
