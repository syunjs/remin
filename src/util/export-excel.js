import XLSX from "xlsx";

export default function exportExcel({
  rowData,
  columnDefs,
  fileName = "export",
}) {
  const headerRow = {};
  columnDefs.forEach((column) => {
    headerRow[column.field] = column.headerName;
  });

  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(rowData, {
    skipHeader: true,
    header: Object.keys(headerRow),
  });
  XLSX.utils.sheet_add_aoa(worksheet, [Object.values(headerRow)], {
    origin: "A1",
  });

  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  XLSX.writeFile(workbook, `${fileName}.xlsx`);
}
