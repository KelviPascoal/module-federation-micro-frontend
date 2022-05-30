import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Customers from "./pages/Customers";

const App = () => (
  <div>
    <Customers></Customers>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
