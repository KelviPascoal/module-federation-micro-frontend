import React, { Suspense, useCallback, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
// @ts-ignore
import customersRoutes from "CustomersApp/CustomersRoutes";
// @ts-ignore
import productRoutes from "ProductApp/ProductRoutes";
// @ts-ignore
import dashboardRoutes from "DashboardApp/DashboardRoutes";

type RouteMF = {
  path: string;
  element: React.ReactElement;
};

export function AppRouter() {
  const [routes, setRoutes] = useState<RouteMF[]>([]);

  const loadRoutes = useCallback(async () => {
    !!customersRoutes && setRoutes((prev) => [...prev, ...customersRoutes]);
    !!productRoutes && setRoutes((prev) => [...prev, ...productRoutes]);
    !!dashboardRoutes && setRoutes((prev) => [...prev, ...dashboardRoutes]);
    console.log("customersRoutes", customersRoutes);
  }, []);

  useEffect(() => {
    loadRoutes();
  }, [loadRoutes]);

  return (
    <>
      <Suspense fallback={<p>"...loading"</p>}>
        <Routes>
          {routes?.map(({ element, path }: RouteMF) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </>
  );
}
