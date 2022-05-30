import React from "react";
import * as S from "./styles";

export default function Customers() {
  return (
    <S.Wrapper>
      <h1>Marketing</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Last purchase</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Shelbi Thomas</td>
            <td>25</td>
            <td>nike blue sneakers</td>
          </tr>
          <tr>
            <td>Jhon Doe</td>
            <td>25</td>
            <td>adidas red sneakers</td>
          </tr>
          <tr>
            <td>Michael Scott</td>
            <td>25</td>
            <td>nike red sneakers</td>
          </tr>
          <tr>
            <td>Lee sin</td>
            <td>25</td>
            <td>nike yellow shirt</td>
          </tr>
          <tr>
            <td>Charizard</td>
            <td>25</td>
            <td>nike black handbag</td>
          </tr>
        </tbody>
      </table>
    </S.Wrapper>
  );
}
