import { Box, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';

export default function Stats(props) {
  const width = props.width;
  const height = props.height;
  return (
    <Flex width={width} height={height} justifyContent="center" alignItems="center">
      stats here
    </Flex>
  )
}