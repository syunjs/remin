import { createBrowserRouter } from "react-router";

import Layout from "./layout";
import CustomerList from "./pages/crm/customer-list";
import CustomForm from "./pages/custom-form";
import Default from "./pages/default";
import FullDataGrid from "./pages/full-data-grid";
import NotFound from "./pages/not-found";
import ServerPaginatedGrid from "./pages/server-paginated-grid";

export default createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        index: true,
        Component: Default,
      },

      {
        path: "full-data-grid",
        Component: FullDataGrid,
      },
      {
        path: "server-paginated-grid",
        Component: ServerPaginatedGrid,
      },
      {
        path: "custom-form",
        Component: CustomForm,
      },
      {
        path: "crm",
        children: [
          {
            path: "customer-list",
            Component: CustomerList,
          },
        ],
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);
