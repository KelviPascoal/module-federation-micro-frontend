export const customersModule = {
  async getRoutes() {
    try {
      //@ts-ignore
      const routes = await import("CustomersApp/CustomersRoutes");
      return routes.default;
    } catch (error) {
      return [];
    }
  },

  async getMenus() {
    try {
      //@ts-ignore
      const routes = await import("CustomersApp/CustomersMenu");
      return routes.default;
    } catch (error) {
      return [];
    }
  },
};
