import React from "react";
import * as S from "./styles";

export default function Marketing() {
  return (
    <S.Wrapper>
      <h1>Marketing</h1>

      <S.Products>
        <S.Product>Product 1</S.Product>
        <S.Product>Product 2</S.Product>
        <S.Product>Product 3</S.Product>
        <S.Product>Product 4</S.Product>
      </S.Products>
    </S.Wrapper>
  );
}
