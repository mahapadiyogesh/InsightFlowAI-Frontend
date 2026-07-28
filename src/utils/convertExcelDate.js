export function convertExcelDate(value) {

  if (value === null || value === undefined || value === "") {
    return value;
  }

  // Already a Date object
  if (value instanceof Date) {
    return value;
  }

  // Excel serial number
  if (typeof value === "number") {

    // Valid Excel date range
    if (value > 25000 && value < 60000) {

      const excelEpoch = new Date(Date.UTC(1899, 11, 30));

      const jsDate = new Date(
        excelEpoch.getTime() + value * 24 * 60 * 60 * 1000
      );

      const day = String(jsDate.getUTCDate()).padStart(2, "0");
      const month = String(jsDate.getUTCMonth() + 1).padStart(2, "0");
      const year = jsDate.getUTCFullYear();

      return `${day}-${month}-${year}`;
    }
  }

  return value;
}