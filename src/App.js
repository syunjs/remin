import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { RouterProvider } from "react-router";

import "./app.css";
import router from "./routes";

ModuleRegistry.registerModules([AllCommunityModule]);

export function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
}
