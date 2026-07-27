export function generateFilters(data, analysis) {
  if (!data || data.length === 0 || !analysis) {
    return [];
  }

  const filters = [];

  analysis.textColumns.forEach((column) => {
    const values = [
      ...new Set(
        data
          .map((row) => row[column])
          .filter(
            (value) =>
              value !== undefined &&
              value !== null &&
              value !== ""
          )
      ),
    ];

    // Filter तयार करण्यासाठी किमान 2 वेगवेगळे values असावेत
    if (values.length > 1) {
      filters.push({
        column,
        type: "select",
        options: values.sort(),
      });
    }
  });

  analysis.dateColumns.forEach((column) => {
    filters.push({
      column,
      type: "date",
    });
  });

  return filters;
}