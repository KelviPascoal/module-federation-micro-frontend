import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";
import { AppRouter } from "./routes";
import GlobalStyle from "./styles/global";
//@ts-ignore
import customersMenu from "CustomersApp/CustomersMenu";
//@ts-ignore

const App = () => (
  <BrowserRouter>
    <div style={{ display: "flex" }}>
      <GlobalStyle />
      <Menu />
      <div>
        <h3>{!!customersMenu && JSON.stringify(customersMenu)}</h3>
      </div>
      <AppRouter />
    </div>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(
  document.getElementById("container") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
