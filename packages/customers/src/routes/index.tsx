import React from "react";

const CustomersPage = React.lazy(() => import("../pages/Customers"));

const routes = [
  {
    element: <CustomersPage />,
    path: "/customers",
  },
];

export default routes;
