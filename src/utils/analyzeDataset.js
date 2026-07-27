import { detectColumnType } from "./detectColumnType";

export function analyzeDataset(data) {
  if (!data || data.length === 0) {
    return null;
  }

  const columns = Object.keys(data[0]);

  const analysis = {
    totalRows: data.length,
    totalColumns: columns.length,

    columns: [],

    numericColumns: [],
    textColumns: [],
    dateColumns: [],

    detected: {},
  };

  columns.forEach((column) => {
    const type = detectColumnType(column);

    const sampleValue = data.find(
      (row) =>
        row[column] !== undefined &&
        row[column] !== null &&
        row[column] !== ""
    )?.[column];

    const isNumeric =
      typeof sampleValue === "number" ||
      (!isNaN(Number(sampleValue)) &&
        sampleValue !== "");

    analysis.columns.push({
      name: column,
      detectedType: type,
      sample: sampleValue,
      numeric: isNumeric,
    });

    if (isNumeric) {
      analysis.numericColumns.push(column);
    } else {
      analysis.textColumns.push(column);
    }

    if (type === "date") {
      analysis.dateColumns.push(column);
    }

    if (type !== "unknown") {
      analysis.detected[type] = column;
    }
  });

  return analysis;
}