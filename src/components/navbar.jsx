import React, { useState, useEffect } from 'react';
import { Router } from 'react-router-dom';
import Logo from './logo';
import Links from './links';
import ThemeButton from './themeButton';
import { Flex, Box, Text, Button, IconButton, Icon } from '@chakra-ui/react';
import { Link as Lk } from '@chakra-ui/react';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { Link } from 'react-router-dom';
import { MdDarkMode } from 'react-icons/md';
import { MdOutlineWbSunny } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';

export default function Navbar(props) {
  const [open, setOpen] = useState(false);
  const [colorMode, setColorMode] = useState(false);

  function handleColor() {
    const col = localStorage.getItem("chakra-ui-color-mode");
    console.log("color: " + col);
    col === "dark" ? setColorMode(false) : setColorMode(true);
  }

  useEffect(() => {
    handleColor();
  }, [colorMode])
  const { toggleColorMode } = useColorMode();

  const path = props.path;

  function handleClick() {
    toggleColorMode();
    setColorMode(!colorMode);
  }

  return (
    <Flex
      as="nav"
      align="center"
      justify="center"
      wrap="wrap"
      pt={2}
      pb={2}
      w="100%"
      bg={props.bg}
      color={props.color}
    >
      <Link to="/home">
        <Text p={2} fontSize="xl" fontWeight="bold">Alden Sullivan</Text>
      </Link>
      <Box width={20} />
      <Link to="/about">
        <Box boxSize="fit-content" borderRadius={5} p={2} mx={1} bgColor={path === "/about" ? "blue.400" : "transparent"}>
          <Text mx={2} fontWeight="medium"> About </Text>
        </Box>
      </Link>
      <Link to="/projects">
        <Box boxSize="fit-content" borderRadius={5} p={2} mx={1} bgColor={path === "/projects" ? "blue.400" : "transparent"}>
          <Text mx={2} fontWeight="medium"> Projects </Text>
        </Box>
      </Link>
      <Icon ml={2} size="xs" as={AiFillGithub} />
      <Lk href="https://github.com/aldensully">
        <Text mx={2} fontWeight="medium"> Source </Text>
      </Lk>
      <IconButton size="md" colorScheme={useColorModeValue('orange', 'purple')} p={2} mx={5} onClick={handleClick} as={useColorModeValue(MdOutlineWbSunny, MdDarkMode)} />
    </Flex>
  )
}