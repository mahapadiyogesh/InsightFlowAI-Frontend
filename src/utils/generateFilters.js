export function generateFilters(data, analysis) {
  if (!Array.isArray(data) || data.length === 0 || !analysis) {
    return [];
  }

  const filters = [];

  analysis.columns.forEach((column) => {
    const values = data
      .map((row) => row[column.name])
      .filter(
        (value) =>
          value !== undefined &&
          value !== null &&
          String(value).trim() !== ""
      );

    const uniqueValues = [...new Set(values)];

    switch (column.type) {
      case "category":

        filters.push({
          column: column.name,
          type: "select",
          options: uniqueValues
            .sort((a, b) =>
              String(a).localeCompare(String(b))
            ),
        });

        break;

      case "text":

        if (uniqueValues.length <= 20) {
          filters.push({
            column: column.name,
            type: "select",
            options: uniqueValues
              .sort((a, b) =>
                String(a).localeCompare(String(b))
              ),
          });
        }

        break;

      case "number":

        filters.push({
          column: column.name,
          type: "range",
          min: Math.min(...values.map(Number)),
          max: Math.max(...values.map(Number)),
        });

        break;

      case "date":

        filters.push({
          column: column.name,
          type: "date",
        });

        break;

      case "boolean":

        filters.push({
          column: column.name,
          type: "select",
          options: ["true", "false"],
        });

        break;

      default:
        break;
    }
  });

  return filters;
}