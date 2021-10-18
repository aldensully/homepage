import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Graph from '../graph';
import { Box, Text, Flex, Button, IconButton } from '@chakra-ui/react';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import Bio from '../components/bio';
import Stats from '../components/stats';
import { GrGraphQl } from 'react-icons/gr';
import { GoGraph } from 'react-icons/go';

export default function About(props) {
  const { toggleColorMode } = useColorMode();
  const [isGraphMode, setIsGraphMode] = useState(true);

  //const bg = useColorModeValue("#171923", "#CBD5E0");
  //const color = useColorModeValue("white", "gray.800");
  const bg = useColorModeValue("#171923", "#FFFAF0");
  const color = useColorModeValue("white", "gray.800");

  const width = window.innerWidth / 2;
  const height = window.innerHeight / 2;
  return (
    <Flex overflowX="hidden" bg={bg} color={color} flexDirection="column" alignItems="center">
      <Navbar bg={bg} color={color} path={props.path} />
      <Flex mt={8} outline="1px solid grey" width={width} flexDirection="column">
        <Flex width="inehrit" position="absolute" zIndex={2} alignItems="center" >
          <Box m={2}
            onClick={() => setIsGraphMode(!isGraphMode)}
            ml={width / 2.4}>
            {isGraphMode ?
              <IconButton size="sm" bg={bg} color={color} as={GoGraph} />
              :
              <IconButton size="sm" bg={bg} color={color} as={GrGraphQl} />
            }
          </Box>
          <Flex
            width="fit-content"
          >
            Experience
          </Flex>
        </Flex>
        {isGraphMode ? <Graph width={width} height={height} bg={bg} /> : <Stats width={width} height={height} />}
      </Flex>
      <Bio />
    </Flex>
  )
}