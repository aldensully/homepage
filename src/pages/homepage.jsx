import React, { useRef, useState, Suspense, useEffect } from 'react';
import Navbar from '../components/navbar';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import { Box, Text, Icon, Flex } from '@chakra-ui/react';
import CameraController from '../three/cameraController';
import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { Link as Lk } from '@chakra-ui/react';
import { Stars } from 'drei/Stars';
import Campfire from '../three/mesh';
import Footer from '../components/footer';
import { motion } from "framer-motion"

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
      <Lk href="https://github.com/aldensully/homepage">
        <Text mx={2} color="gray.200" fontSize="2xl" fontWeight="medium"> Source </Text>
      </Lk>
    </Box>
  )
}
const Homepage = (props) => {
  const [loadin, setLoadin] = useState(false);
  //store loadin in sessionstorage so it only says hello once
  useEffect(() => {
    setTimeout(() => setLoadin(true), 2000);
  }, [setLoadin])

  return (
    <>
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
        <Canvas >
          {/* <CameraController /> */}
          <color attach="background" args={['#001']} />
          <ambientLight color="pink" />
          <Stars radius={50} depth={70} count={5000} factor={4} saturation={10} fade />
          {/* <Suspense fallback={null}>
            <Campfire />
          </Suspense> */}
        </Canvas>
      </Box>
    </>
  )
}
export default Homepage;