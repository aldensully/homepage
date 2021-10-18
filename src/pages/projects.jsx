import React from 'react';
import Navbar from '../components/navbar';
import { Flex, Heading, Container, SimpleGrid, Box, Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import Footer from '../components/footer';

export default function Projects(props) {
  const bg = useColorModeValue("#171923", "#CBD5E0");
  const color = useColorModeValue("white", "gray.800");
  const accent = useColorModeValue("blue.200", "blue.500");
  const width = window.innerWidth / 2;
  return (
    <Flex bg={bg} color={color} overflowY="scroll" flexDirection="column" alignItems="center" height="100vh" overflowX="hidden">
      <Navbar path={props.path} />
      <Flex flexDirection="column">
        <Heading ml={5} mt={20} textDecoration="underline" fontSize="xl">Projects</Heading>
        <SimpleGrid alignSelf="center" ml={5} mt={10} columns={3} spacingY={10} spacingX={10} >
          <LinkBox maxW="250px" cursor="pointer">
            <Image boxSize="250px" maxH="200px" borderRadius={10} src="https://bit.ly/sage-adebayo" />
            <LinkOverlay href={""} target="_blank">
              <Heading fontSize="xl" mt={2}>SleepEdo</Heading>
              <Text fontSize="md">Social alarm clock app</Text>
            </LinkOverlay>
          </LinkBox>
          <LinkBox maxW="250px" cursor="pointer">
            <Image boxSize="250px" maxH="200px" borderRadius={10} src="https://bit.ly/sage-adebayo" />
            <LinkOverlay href={""} target="_blank">
              <Heading fontSize="xl" mt={2}>Graph Notes</Heading>
              <Text fontSize="md">Graph visualization tool for note taking</Text>
            </LinkOverlay>
          </LinkBox>
          <LinkBox maxW="250px" cursor="pointer">
            <Image boxSize="250px" maxH="200px" borderRadius={10} src="https://bit.ly/sage-adebayo" />
            <LinkOverlay href={""} target="_blank">
              <Heading fontSize="xl" mt={2}>Random Audio</Heading>
              <Text fontSize="md">Random audio downloader for youtube</Text>
            </LinkOverlay>
          </LinkBox>
          <LinkBox maxW="250px" cursor="pointer">
            <Image boxSize="250px" maxH="200px" borderRadius={10} src="https://bit.ly/sage-adebayo" />
            <LinkOverlay href={""} target="_blank">
              <Heading fontSize="xl" mt={2}>Web2Learn</Heading>
              <Text fontSize="md">Online learning platform</Text>
            </LinkOverlay>
          </LinkBox>
          <LinkBox maxW="250px" cursor="pointer">
            <Image boxSize="250px" maxH="200px" borderRadius={10} src="https://bit.ly/sage-adebayo" />
            <LinkOverlay href={""} target="_blank">
              <Heading fontSize="xl" mt={2}>Gallery</Heading>
              <Text fontSize="md">Audio/Visual works</Text>
            </LinkOverlay>
          </LinkBox>
          <LinkBox maxW="250px" cursor="pointer">
            <Image boxSize="250px" maxH="200px" borderRadius={10} src="https://bit.ly/sage-adebayo" />
            <LinkOverlay href={""} target="_blank">
              <Heading fontSize="xl" mt={2}>Google Data Visualizer</Heading>
              <Text fontSize="md">Visualize your google data</Text>
            </LinkOverlay>
          </LinkBox>
        </SimpleGrid>
      </Flex>
      <Footer />
    </Flex >
  )
}