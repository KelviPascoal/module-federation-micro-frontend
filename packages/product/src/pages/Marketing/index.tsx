import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import * as S from "./styles";

export default function Marketing() {
  return (
    <S.Wrapper>
      <h1>Marketing</h1>
      <Grid margin="1.6rem" gridTemplateColumns="repeat(4, 1fr)" gap={6}>
        <Box w="16rem" h="16rem" bg="yellow.200">
          1
        </Box>
        <Box w="16rem" h="16rem" bg="tomato">
          2
        </Box>
        <Box w="16rem" h="16rem" bg="pink.100">
          3
        </Box>

        <Box w="16rem" h="16rem" bg="yellow.200">
          1
        </Box>
        <Box w="16rem" h="16rem" bg="tomato">
          2
        </Box>
        <Box w="16rem" h="16rem" bg="pink.100">
          3
        </Box>
        <Box w="16rem" h="16rem" bg="yellow.200">
          1
        </Box>
        <Box w="16rem" h="16rem" bg="tomato">
          2
        </Box>
        <Box w="16rem" h="16rem" bg="pink.100">
          3
        </Box>

        <Box w="16rem" h="16rem" bg="yellow.200">
          1
        </Box>
        <Box w="16rem" h="16rem" bg="tomato">
          2
        </Box>
        <Box w="16rem" h="16rem" bg="pink.100">
          3
        </Box>
      </Grid>
    </S.Wrapper>
  );
}
