import { createBrowserRouter } from "react-router";
import { DashboardsHome } from "./pages/DashboardsHome";
import { DashboardPage } from "./pages/DashboardPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: DashboardsHome,
  },
  {
    path: "/dashboards/:dashboardType",
    Component: DashboardPage,
  },
]);
