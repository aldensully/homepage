import React from "react"
import { Box, Text } from "@chakra-ui/react"

export default function Logo(props) {
  return (
    <Box justifyContent="center" alignItems="center" boxSize={6} bg={props.bg} color={props.color}>
      AS
    </Box>
  )
}