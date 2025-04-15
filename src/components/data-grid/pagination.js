import { TablePagination } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const defaultRowsPerPageOptions = [
  {
    label: "10",
    value: 10,
  },
  {
    label: "20",
    value: 20,
  },
  {
    label: "50",
    value: 50,
  },
  {
    label: "100",
    value: 100,
  },
  {
    label: "All",
    value: -1,
  },
];

export default function Pagination({
  count = 0,
  page: initialPage = 0,
  rowsPerPage: initialRowsPerPage,
  rowsPerPageOptions = defaultRowsPerPageOptions,
  onPaginationChange,
}) {
  const isMobile = useMediaQuery("(max-width:768px)");

  const [page, setPage] = useState(initialPage);
  const [rowsPerPage, setRowsPerPage] = useState(
    initialRowsPerPage || (isMobile ? 10 : 20),
  );

  function handlePageChange(event, newPage) {
    setPage(newPage);
  }

  function handleRowsPerPageChange(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  useEffect(() => {
    onPaginationChange(page, rowsPerPage);
  }, [page, rowsPerPage]);

  return (
    <TablePagination
      component="div"
      count={count}
      onPageChange={handlePageChange}
      onRowsPerPageChange={handleRowsPerPageChange}
      page={page}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={rowsPerPageOptions}
      showFirstButton={!isMobile}
      showLastButton={!isMobile}
    />
  );
}

Pagination.propTypes = {
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  rowsPerPageOptions: PropTypes.array,
  onPaginationChange: PropTypes.func.isRequired,
};
