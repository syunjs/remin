import { createBrowserRouter } from "react-router";

import Layout from "./layout";
import Example from "./pages/example/index";

export default createBrowserRouter([
  {
    Component: Layout,
    children: [{ path: "example", Component: Example }],
  },
]);
