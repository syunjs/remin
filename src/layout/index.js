import { useMediaQuery } from "@mui/material";

import DesktopLayout from "./desktop";
import MobileLayout from "./mobile";

export default function Layout() {
  const isMobile = useMediaQuery("(max-width:768px)");

  return <>{isMobile ? <MobileLayout /> : <DesktopLayout />}</>;
}
