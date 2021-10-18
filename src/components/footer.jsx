import React from 'react';
import { Box } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box align="center" opacity={0.4} p={10} fontSize="sm">
      &copy; {new Date().getFullYear()} Alden Sullivan. All Rights Reserved.
    </Box>
  )
}