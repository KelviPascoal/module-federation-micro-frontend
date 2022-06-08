import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";
import { AppRouter } from "./routes";
import GlobalStyle from "./styles/global";
//@ts-ignore
import customersMenu from "CustomersApp/CustomersMenu";
import { ChakraProvider } from "@chakra-ui/react";
import { theme as chakraTheme } from "./styles/chakra/theme";
//@ts-ignore

const App = () => (
  <ChakraProvider theme={chakraTheme}>
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <GlobalStyle />
        <Menu />
        <AppRouter />
      </div>
    </BrowserRouter>
  </ChakraProvider>
);

const root = ReactDOM.createRoot(
  document.getElementById("container") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
