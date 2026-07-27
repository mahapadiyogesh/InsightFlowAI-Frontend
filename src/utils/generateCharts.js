export function generateCharts(data, analysis) {
  if (!data || data.length === 0 || !analysis) {
    return [];
  }

  const charts = [];

  const {
    numericColumns,
    textColumns,
    dateColumns,
  } = analysis;

  // -------------------------
  // Line Chart
  // -------------------------
  if (
    dateColumns.length > 0 &&
    numericColumns.length > 0
  ) {
    charts.push({
      id: "line-chart",
      type: "line",
      title: `${numericColumns[0]} Trend`,
      xAxis: dateColumns[0],
      yAxis: numericColumns[0],
    });
  }

  // -------------------------
  // Bar Chart
  // -------------------------
  if (
    textColumns.length > 0 &&
    numericColumns.length > 0
  ) {
    charts.push({
      id: "bar-chart",
      type: "bar",
      title: `${numericColumns[0]} by ${textColumns[0]}`,
      xAxis: textColumns[0],
      yAxis: numericColumns[0],
    });
  }

  // -------------------------
  // Pie Chart
  // -------------------------
  if (
    textColumns.length > 0 &&
    numericColumns.length > 0
  ) {
    charts.push({
      id: "pie-chart",
      type: "pie",
      title: `${numericColumns[0]} Distribution`,
      nameKey: textColumns[0],
      valueKey: numericColumns[0],
    });
  }

  // -------------------------
  // Scatter Chart
  // -------------------------
  if (numericColumns.length >= 2) {
    charts.push({
      id: "scatter-chart",
      type: "scatter",
      title: `${numericColumns[0]} vs ${numericColumns[1]}`,
      xAxis: numericColumns[0],
      yAxis: numericColumns[1],
    });
  }

  // -------------------------
  // Area Chart
  // -------------------------
  if (
    dateColumns.length > 0 &&
    numericColumns.length > 0
  ) {
    charts.push({
      id: "area-chart",
      type: "area",
      title: `${numericColumns[0]} Over Time`,
      xAxis: dateColumns[0],
      yAxis: numericColumns[0],
    });
  }

  return charts;
}