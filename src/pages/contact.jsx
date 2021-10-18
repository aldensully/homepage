import React from 'react';
import Navbar from '../components/navbar';
import { Flex } from '@chakra-ui/react';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';

export default function Contact(props) {
  const bg = useColorModeValue("blue.500", "blue.200");
  const color = useColorModeValue("white", "gray.800");
  const accent = useColorModeValue("blue.200", "blue.500");
  const width = window.innerWidth / 2.5;
  return (
    <Flex
      overflowY="scroll"
      overflowX="hidden"
      bg={color}
      flexDirection="column"
      alignItems="center"
    >
      <Navbar path={props.path} />
      Contacts Page
    </Flex>
  )
}