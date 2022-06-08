import React from "react";

const BestSallers = React.lazy(() => import("../pages/BestSallers"));
const Marketing = React.lazy(() => import("../pages/Marketing"));

const routes = [
  {
    element: <Marketing />,
    path: "/products/products-management",
  },

  {
    element: <BestSallers />,
    path: "/products/best-sallers",
  },
];

export default routes;
