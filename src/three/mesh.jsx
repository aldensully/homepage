import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import React, { useRef, useState, Suspense, useEffect } from 'react';
import { Html } from '@react-three/drei';

function Mesh(props) {
  const ref = useRef()
  return (
    <mesh>
      <boxGeometry />
      <meshPhongMaterial color="hotpink" />
    </mesh>
  )
}
export default Mesh;