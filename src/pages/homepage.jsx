import React, { useRef, useState, Suspense, useEffect } from 'react';
import Navbar from '../components/navbar';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import { Box, Text, Icon, Flex } from '@chakra-ui/react';
import * as THREE from 'three';
import CameraController from '../three/cameraController';
import Mesh from '../three/mesh';
import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { Link as Lk } from '@chakra-ui/react';

function HomeLinks(props) {
  const path = props.path;
  return (
    <Box width="fit-content">
      <Link to="/about">
        <Box boxSize="fit-content" bgColor={path === "/about" ? "blue.400" : "transparent"}>
          <Text mx={2} color="gray.200" fontSize="2xl" fontWeight="medium"> About </Text>
        </Box>
      </Link>
      <Link to="/projects">
        <Box boxSize="fit-content" bgColor={path === "/projects" ? "blue.400" : "transparent"}>
          <Text mx={2} color="gray.200" fontSize="2xl" fontWeight="medium"> Projects </Text>
        </Box>
      </Link>
      <Lk href="https://github.com/aldensully">
        <Text mx={2} color="gray.200" fontSize="2xl" fontWeight="medium"> Source </Text>
      </Lk>
    </Box>
  )
}
export default function Homepage(props) {
  const [loadin, setLoadin] = useState(false);
  //store loadin in sessionstorage so it only says hello once
  useEffect(() => {
    setTimeout(() => setLoadin(true), 2000);
  }, [setLoadin])

  return (
    <>
      {/* {loadin ? <Navbar path={props.path} /> : null} */}
      <Box position="absolute" ml="60%" mt="20%" width="fit-content" height="100px" bgColor="transparent" zIndex="2">
        {loadin ?
          <HomeLinks path={props.path} />
          :
          <Text color="gray.200" fontSize="5xl">
            Hello...
          </Text>
        }
      </Box>
      <Box position="relative" width="100%" height="100vh">
        <Canvas>
          <CameraController />
          <color attach="background" args={['black']} />
          <fog attach="fog" args={['black', 15, 20]} />
          <pointLight position={[10, 10, 10]} />
          <Mesh />
        </Canvas>
      </Box>
    </>
  )
}