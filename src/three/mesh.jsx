import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import React, { useRef, useState, Suspense, useEffect, useMemo, useLayoutEffect } from 'react';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


function Campfire(props) {
  const ref = useRef();
  const camp = useLoader(GLTFLoader, 'campfire.glb');
  return (
    <primitive ref={ref} position={[2, -1.5, 2]} scale={[2, 2, 2]} object={camp.scene} />
  )
}
export default Campfire;