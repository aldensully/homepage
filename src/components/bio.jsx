import React from 'react';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Flex, Text, Heading, Container, List, ListItem, ListIcon, Link } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { ImSoundcloud2 } from 'react-icons/im';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';

export default function Bio(props) {
  return (
    <Container mb={20} maxW="xl" flexDirection="column">
      <Flex mt={6} alignItems="left" justifyContent="space-between" flexDirection="row">
        <Box>
          <Heading as="h2" variant="page-title">Alden Sullivan</Heading>
          <p>Developer, Artist</p>
        </Box>
        <Box bg="blue.400" width="80px" height="80px">
          Profile Picture
        </Box>
      </Flex>
      <Box mt={10}>
        <Heading textDecoration="underline" fontSize="xl">
          Bio
        </Heading>
        <Text mt={2}>
          Hello, I am freelance developer, artist and student living in the USA.
          When I am not coding I am probably working on music, playing video games, or hanging with my dogs.
          Currently, my main focus is on the developement of a graph-based collaborative learning app which you can read more about
          <Link color="blue.200" href="www.google.com"> here. </Link>
        </Text>
      </Box>
      <Box mt={10}>
        <Heading textDecoration="underline" fontSize="xl">
          Interests
        </Heading>
        <Text mt={2}>
          Music production, sound design, web developement, ed-tech, neurotech, machine learning, game developement
        </Text>
      </Box>
      <Box mt={10}>
        <Heading textDecoration="underline" fontSize="xl">
          Contact
        </Heading>
        <List mt={3} spacing={3}>
          <ListItem>
            <ListIcon as={AiFillGithub} color="green.500" />
            <Link href="https://github.com/aldensully">
              @aldensully
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon as={FiMail} color="green.500" />
            aw.sullivan17@gmail.com
          </ListItem>
          <ListItem>
            <ListIcon as={ImSoundcloud2} color="green.500" />
            <Link href="https://soundcloud.com/aldensully">
              @aldensully
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon as={AiOutlineInstagram} color="green.500" />
            <Link href="https://www.instagram.com/svl1y_/">
              @svl1y_
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon as={BsDiscord} color="green.500" />
            alden#1422
          </ListItem>
        </List>
      </Box>
    </Container >
  )
}