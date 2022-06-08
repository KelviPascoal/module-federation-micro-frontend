import React, { Suspense, useCallback, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { customersModule } from "../modules/customersModule";
import { dashboardModule } from "../modules/dashboardtModule";
import { productModule } from "../modules/productModule";

type RouteMF = {
  path: string;
  element: React.ReactElement;
};

export function AppRouter() {
  const [routes, setRoutes] = useState<RouteMF[]>([]);

  const loadRoutes = useCallback(async () => {
    const customersRoutes = await customersModule.getRoutes();
    const productRoutes = await productModule.getRoutes();
    const dashboardRoutes = await dashboardModule.getRoutes();

    setRoutes([
      ...customersRoutes.filter((item) => item.path.startsWith("/customers")),
      ...productRoutes.filter((item) => item.path.startsWith("/product")),
      ...dashboardRoutes.filter((item) => item.path.startsWith("/dashboard")),
    ]);
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
