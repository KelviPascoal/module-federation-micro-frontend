import React from "react";

const ProductManagementPage = React.lazy(() => import("../pages/Management"));
const ProductMarketingPage = React.lazy(() => import("../pages/Marketing"));

const routes = [
  {
    element: <ProductManagementPage />,
    path: "/products",
  },
  {
    element: <ProductMarketingPage />,
    path: "/products/management",
  },
];

export default routes;
