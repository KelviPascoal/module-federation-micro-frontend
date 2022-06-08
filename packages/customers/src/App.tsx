import { extendTheme, ThemeProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Customers from "./pages/Customers";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

const App = () => (
  <ThemeProvider theme={theme}>
    <Customers></Customers>
  </ThemeProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
