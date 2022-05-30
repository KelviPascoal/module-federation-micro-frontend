import React, { useState } from "react";
import * as S from "./styles";
//@ts-ignore
import dashboardRoutes from "DashboardApp/DashboardRoutes";
//@ts-ignore
import customersRoutes from "CustomersApp/CustomersRoutes";
//@ts-ignore
import productRoutes from "ProductApp/ProductRoutes";

export type MenuRoute = {
  path: string;
  label: string;
};

function Menu() {
  const [routes, setRoutes] = useState<MenuRoute[]>([]);

  return (
    <S.Wrapper>
      <a href="/dashboard">Dashboard</a>
      <a href="/products">Products</a>
      <a href="/custormers">Customers</a>
    </S.Wrapper>
  );
}
export default Menu;
