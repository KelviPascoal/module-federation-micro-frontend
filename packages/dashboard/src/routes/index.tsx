import React from "react";

const DashboardPage = React.lazy(() => import("../pages/Dashboard"));

const routes = [
  {
    element: <DashboardPage />,
    path: "/dashboard",
  },
];

export default routes;
