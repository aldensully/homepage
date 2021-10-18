import React, { useState } from "react";
import { Box, Button, Stack, Flex, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

export default function Links(props) {
  const path = props.path;
  return (
    <Flex>
      <Link to="/home">
        <Text p={2} mx={2} fontSize="lg" fontWeight="bold">Alden Sullivan</Text>
      </Link>
      <Link to="/about">
        <Box boxSize="fit-content" borderRadius={5} p={2} bgColor={path === "/about" ? "blue.200" : "transparent"}>
          <Text mx={2} fontWeight="medium"> About </Text>
        </Box>
      </Link>
      <Link to="/projects">
        <Box boxSize="fit-content" borderRadius={5} p={2} bgColor={path === "/projects" ? "blue.400" : "transparent"}>
          <Text mx={2} fontWeight="medium"> Projects </Text>
        </Box>
      </Link>
      <Link to="/contact">
        <Box boxSize="fit-content" borderRadius={5} p={2} bgColor={path === "/contact" ? "blue.400" : "transparent"}>
          <Text mx={2} fontWeight="medium"> Contact </Text>
        </Box>
      </Link>
    </Flex >
  )
}