import { detectColumnType } from "./detectColumnType";

export function analyzeDataset(data) {
  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }

  const columns = Object.keys(data[0]);

  const analysis = {
    totalRows: data.length,
    totalColumns: columns.length,

    columns: [],

    numericColumns: [],
    textColumns: [],
    categoryColumns: [],
    dateColumns: [],
    booleanColumns: [],

    detected: {},
  };

  columns.forEach((column) => {
    // Get all values from this column
    const values = data.map((row) => row[column]);

    // Detect column type
    const type = detectColumnType(column, values);

    // Remove empty values
    const cleaned = values.filter(
      (value) =>
        value !== undefined &&
        value !== null &&
        String(value).trim() !== ""
    );

    // Sample value
    const sample = cleaned.length > 0 ? cleaned[0] : null;

    // Missing values
    const missingValues = values.length - cleaned.length;

    // Unique values
    const uniqueValues = [...new Set(cleaned)];

    // Numeric statistics
    let min = null;
    let max = null;
    let average = null;

    if (type === "number") {
      const numbers = cleaned
        .map(Number)
        .filter((n) => !isNaN(n));

      if (numbers.length > 0) {
        min = Math.min(...numbers);
        max = Math.max(...numbers);

        average =
          numbers.reduce((sum, n) => sum + n, 0) /
          numbers.length;
      }
    }

    analysis.columns.push({
      name: column,
      type,
      sample,
      totalValues: values.length,
      missingValues,
      uniqueValues: uniqueValues.length,
      min,
      max,
      average,
    });

    switch (type) {
      case "number":
        analysis.numericColumns.push(column);
        break;

      case "text":
        analysis.textColumns.push(column);
        break;

      case "category":
        analysis.categoryColumns.push(column);
        break;

      case "date":
        analysis.dateColumns.push(column);
        break;

      case "boolean":
        analysis.booleanColumns.push(column);
        break;

      default:
        break;
    }

    if (!analysis.detected[type]) {
      analysis.detected[type] = [];
    }

    analysis.detected[type].push(column);
  });

  return analysis;
}