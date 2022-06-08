import React from "react";

const CustomersPage = React.lazy(() => import("../pages/Customers"));

const routes = [
  {
    element: <CustomersPage />,
    path: "/customers/customers-list",
  },
];

export default routes;
