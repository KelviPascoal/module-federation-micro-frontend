import { extendTheme, ThemeProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Marketing from "./pages/Marketing";

const theme = extendTheme({
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Marketing />
  </ThemeProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
