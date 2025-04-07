import { createBrowserRouter } from "react-router";

import Layout from "./layout";
import CustomerList from "./pages/crm/customer-list";
import CustomForm from "./pages/custom-form";
import DataTable from "./pages/data-table";

export default createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: "data-table",
        Component: DataTable,
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
    ],
  },
]);
