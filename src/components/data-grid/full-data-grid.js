import { Box } from "@mui/material";
import { themeMaterial } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import PropTypes from "prop-types";
import { useMemo, useState } from "react";

import Pagination from "./pagination";
import DataGridToolbar from "./toolbar";

export default function FullDataGrid({
  columnDefs,
  rowData: fullRowData,
  page,
  rowsPerPage,
  rowsPerPageOptions,
  ...props
}) {
  const [rowData, setRowData] = useState([]);

  const autoSizeStrategy = useMemo(() => {
    return {
      type: "fitCellContents",
    };
  }, []);

  function handlePaginationChange(page, rowsPerPage) {
    setRowData(fullRowData.slice(page * rowsPerPage, (page + 1) * rowsPerPage));
  }

  return (
    <Box>
      <DataGridToolbar
        columnDefs={columnDefs}
        isServerPaginated={false}
        rowData={fullRowData}
      />

      <AgGridReact
        autoSizeStrategy={autoSizeStrategy}
        columnDefs={columnDefs}
        domLayout={"autoHeight"}
        rowData={rowData}
        theme={themeMaterial}
        {...props}
      />

      <Pagination
        count={fullRowData.length}
        onPaginationChange={handlePaginationChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={rowsPerPageOptions}
      />
    </Box>
  );
}

FullDataGrid.propTypes = {
  columnDefs: PropTypes.array.isRequired,
  rowData: PropTypes.array.isRequired,
  rowsPerPageOptions: PropTypes.array,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  "...props": PropTypes.object,
};
