import { useState } from "react";

import users from "../../mock/users";
import FullDataGrid from "../components/data-grid/full-data-grid";

const columns = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Name" },
  { field: "gender", headerName: "Gender" },
  { field: "email", headerName: "Email" },
  { field: "phone", headerName: "Phone" },
  { field: "address", headerName: "Address" },
  { field: "city", headerName: "City" },
  { field: "state", headerName: "State" },
];

export default function FullDataGridPage() {
  const [rowData] = useState(users);
  const [columnDefs] = useState(columns);

  return <FullDataGrid columnDefs={columnDefs} rowData={rowData} />;
}
