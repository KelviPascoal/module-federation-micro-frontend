import { Table, Thead, Tbody, Td, Tr, Th } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import * as S from "./styles";

export default function BestSallers() {
  const [products, setProducts] = useState([]);

  async function loadProducts() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
        setProducts(res.products);
      });
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <S.Wrapper>
      <h1>best sellers</h1>
      <Table>
        <Thead>
          <Tr>
            <Th>brand</Th>
            <Th>title</Th>
            <Th>category</Th>
            <Th>description</Th>
            <Th>discountPercentage</Th>
            <Th>rating</Th>
          </Tr>
        </Thead>
        <Tbody>
          {!!products &&
            products.map((product, index) => (
              <Tr key={`${product.id}-${index}`}>
                <Td>{product.brand}</Td>
                <Td>{product.title}</Td>
                <Td>{product.category}</Td>
                <Td>{product.description}</Td>
                <Td>{product.discountPercentage}</Td>
                <Td>{product.rating}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </S.Wrapper>
  );
}
