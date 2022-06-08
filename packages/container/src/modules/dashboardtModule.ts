export const dashboardModule = {
  async getRoutes() {
    try {
      //@ts-ignore
      const routes = await import("DashboardApp/DashboardRoutes");
      return routes.default;
    } catch (error) {
      return [];
    }
  },

  async getMenus() {
    try {
      //@ts-ignore
      const routes = await import("DashboardApp/DashboardMenu");
      return routes.default;
    } catch (error) {
      return [];
    }
  },
};
