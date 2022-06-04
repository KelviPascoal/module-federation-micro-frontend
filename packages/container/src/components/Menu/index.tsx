import React, { useEffect, useState } from "react";
import * as S from "./styles";

//@ts-ignore
import customersMenu from "CustomersApp/CustomersMenu";
//@ts-ignore
import productMenu from "ProductApp/ProductMenu";
//@ts-ignore
import dashboardMenu from "DashboardApp/DashboardMenu";

export type MenuRoute = {
  path: string;
  label: string;
};

function Menu() {
  const [menu, setMenu] = useState([]);

  console.log("productMenu", productMenu);

  useEffect(() => {
    !!customersMenu && setMenu((prev) => [...prev, ...customersMenu]);
    !!dashboardMenu && setMenu((prev) => [...prev, ...dashboardMenu]);
    !!productMenu && setMenu((prev) => [...prev, ...productMenu]);
  }, []);

  return (
    <>
      <S.Wrapper>
        {menu.map(({ label, path }, index) => (
          <a key={`${index}`} href={path}>
            {label}
          </a>
        ))}
      </S.Wrapper>
    </>
  );
}
export default Menu;
