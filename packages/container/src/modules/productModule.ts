export const productModule = {
  async getRoutes() {
    try {
      //@ts-ignore
      const routes = await import("ProductApp/ProductRoutes");
      return routes.default;
    } catch (error) {
      return [];
    }
  },

  async getMenus() {
    try {
      //@ts-ignore
      const routes = await import("ProductApp/ProductMenu");
      return routes.default;
    } catch (error) {
      return [];
    }
  },
};
