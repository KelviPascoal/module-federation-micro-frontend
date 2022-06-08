import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import * as S from "./styles";

export default function Customers() {
  return (
    <S.Wrapper>
      <h1>Marketing</h1>

      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Age</Th>
            <Th>Last purchase</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Shelbi Thomas</Td>
            <Td>25</Td>
            <Td>nike blue sneakers</Td>
          </Tr>
          <Tr>
            <Td>Jhon Doe</Td>
            <Td>25</Td>
            <Td>adidas red sneakers</Td>
          </Tr>
          <Tr>
            <Td>Michael Scott</Td>
            <Td>25</Td>
            <Td>nike red sneakers</Td>
          </Tr>
          <Tr>
            <Td>Lee sin</Td>
            <Td>25</Td>
            <Td>nike yellow shirt</Td>
          </Tr>
          <Tr>
            <Td>Charizard</Td>
            <Td>25</Td>
            <Td>nike black handbag</Td>
          </Tr>
        </Tbody>
      </Table>
    </S.Wrapper>
  );
}
