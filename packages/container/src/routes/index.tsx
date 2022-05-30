import React, { Suspense } from "react";
//@ts-ignore
const DashboardPage = React.lazy(() => import("DashboardApp/DashboardPage"));
const ProductPageMarketing = React.lazy(
  //@ts-ignore
  () => import("ProductApp/ProductPageMarketing")
);
const ProductPageManagement = React.lazy(
  //@ts-ignore
  () => import("ProductApp/ProductPageManagement")
);
//@ts-ignore
const CustomersPage = React.lazy(() => import("CustomersApp/CustomersPage"));
//@ts-ignore
import dashboardRoutes from "DashboardApp/DashboardRoutes";
import { Routes, Route } from "react-router-dom";

export const AppRouter = () => {
  console.log("route", dashboardRoutes);

  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <Suspense fallback={<p>loading..."</p>}>
            <DashboardPage />
          </Suspense>
        }
      />
      <Route
        path="/products"
        element={
          <Suspense fallback={<p>loading..."</p>}>
            <ProductPageMarketing />
          </Suspense>
        }
      />

      <Route
        path="/products/management"
        element={
          <Suspense fallback={<p>loading..."</p>}>
            <ProductPageManagement />
          </Suspense>
        }
      />

      <Route
        path="/custormers"
        element={
          <Suspense fallback={<p>loading..."</p>}>
            <CustomersPage />
          </Suspense>
        }
      />
    </Routes>
  );
};
