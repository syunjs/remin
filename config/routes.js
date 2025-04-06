import { createBrowserRouter } from "react-router";

import Layout from "../src/layout";
import Example from "../src/pages/example/index";

export default createBrowserRouter([
  {
    Component: Layout,
    children: [{ path: "example", Component: Example }],
  },
]);
