import React, { useCallback, useEffect, useState } from "react";
import * as S from "./styles";

import { Link } from "react-router-dom";
import { customersModule } from "../../modules/customersModule";
import { dashboardModule } from "../../modules/dashboardtModule";
import { productModule } from "../../modules/productModule";

import { MoonIcon } from "@chakra-ui/icons";
import { background, Box, Button, color } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

type RouteProps = {
  path: string;
  label: string;
};

export type MenuRoute = {
  path: string;
  label: string;
  submenus?: RouteProps[];
  title?: string;
};

function Menu() {
  const [menu, setMenu] = useState([]);

  const loadMenus = useCallback(async () => {
    const customersMenu = await customersModule.getMenus();
    const dashboardMenu = await dashboardModule.getMenus();
    const productMenu = await productModule.getMenus();

    setMenu([...customersMenu, ...dashboardMenu, ...productMenu]);
  }, []);

  useEffect(() => {
    loadMenus();
  }, []);

  return (
    <>
      <S.Wrapper>
        <S.Logo>
          <MoonIcon w={6} h={6} />
          <h1>Moon</h1>
        </S.Logo>

        {menu.map((route: MenuRoute, index) => (
          <>
            {!!route.submenus ? (
              <Accordion allowToggle>
                <AccordionItem border="none">
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      {!!route.title && route.title}
                    </Box>
                  </AccordionButton>
                  {route.submenus.map((submenu) => (
                    <AccordionPanel paddingLeft="10" key={submenu.path} pb={4}>
                      <Link style={{ color: "gray" }} to={submenu.path}>
                        {submenu.label}
                      </Link>
                    </AccordionPanel>
                  ))}
                </AccordionItem>
              </Accordion>
            ) : (
              <Link key={`${index}`} to={route.path}>
                <Button background="transparent" w="full" fontWeight={400}>
                  <Box flex="1" textAlign="left" w="full">
                    {route.label}
                  </Box>
                </Button>
              </Link>
            )}
          </>
        ))}
      </S.Wrapper>
    </>
  );
}
export default Menu;
