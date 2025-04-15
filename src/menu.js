import ChatIcon from "@mui/icons-material/Chat";
import DescriptionIcon from "@mui/icons-material/Description";
import EmailIcon from "@mui/icons-material/Email";
import ListAltIcon from "@mui/icons-material/ListAlt";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import SettingsIcon from "@mui/icons-material/Settings";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import TableChartIcon from "@mui/icons-material/TableChart";

export default [
  {
    subheader: "Data table and form",
  },
  {
    path: "full-data-grid",
    label: "Full data grid",
    icon: <TableChartIcon />,
  },
  {
    path: "server-paginated-grid",
    label: "Server paginated grid",
    icon: <TableChartIcon />,
  },
  {
    path: "custom-form",
    label: "Custom form",
    icon: <DescriptionIcon />,
  },
  {
    subheader: "Applications",
  },
  {
    path: "crm",
    label: "CRM",
    icon: <SupervisorAccountIcon />,
    children: [
      {
        path: "customer-list",
        label: "Customer list",
      },
      {
        path: "customer-create",
        label: "Create customer",
      },
      {
        path: "contracts",
        label: "Contracts",
      },
    ],
  },
  {
    path: "e-commerce",
    label: "E-commerce",
    icon: <ShoppingCartIcon />,
    children: [
      {
        path: "products",
        label: "Products",
      },
      {
        path: "orders",
        label: "Orders",
      },
      {
        path: "customers",
        label: "Customers",
      },
    ],
  },
  {
    subheader: "Communication",
  },
  {
    path: "chat",
    label: "Chat",
    icon: <ChatIcon />,
  },
  {
    path: "email",
    label: "Email",
    icon: <EmailIcon />,
  },
  {
    subheader: "System",
  },
  {
    path: "settings",
    label: "Settings",
    icon: <SettingsIcon />,
  },
  {
    path: "logs",
    label: "Logs",
    icon: <ListAltIcon />,
  },
  {
    path: "system-monitoring",
    label: "System Monitoring ",
    icon: <MonitorHeartIcon />,
  },
];
