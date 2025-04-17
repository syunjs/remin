import { Box, Button, Menu, MenuItem } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

import exportExcel from "../../util/export-excel";

export default function DataGridToolbar({
  rowData,
  columnDefs,
  isServerPaginated,
}) {
  const [anchorElement, setAnchorElement] = useState(null);

  function handleMenuOpen(e) {
    setAnchorElement(e.currentTarget);
  }

  function handleMenuClose() {
    setAnchorElement(null);
  }

  function handleExportExcel() {
    if (!isServerPaginated) {
      exportExcel({ rowData, columnDefs });
    }
    handleMenuClose();
  }

  return (
    <Box>
      <Button onClick={handleMenuOpen}>Export</Button>
      <Menu
        anchorEl={anchorElement}
        onClose={handleMenuClose}
        open={Boolean(anchorElement)}
      >
        <MenuItem onClick={handleExportExcel}>Excel</MenuItem>
        <MenuItem onClick={handleMenuClose}>CSV</MenuItem>
        <MenuItem onClick={handleMenuClose}>PDF</MenuItem>
        <MenuItem onClick={handleMenuClose}>Print</MenuItem>
      </Menu>
    </Box>
  );
}

DataGridToolbar.propTypes = {
  rowData: PropTypes.array,
  columnDefs: PropTypes.array,
  isServerPaginated: PropTypes.bool,
};
