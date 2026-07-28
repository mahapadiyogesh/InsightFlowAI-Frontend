export function generateCharts(data, analysis) {
  if (!analysis) return [];

  const charts = [];

  const numericColumns = analysis.numericColumns ?? [];
  const categoryColumns = analysis.categoryColumns ?? [];
  const dateColumns = analysis.dateColumns ?? [];

  // KPI
  numericColumns.forEach((col) => {
    charts.push({
      chart: "kpi",
      title: col,
      value: col,
    });
  });

  // Bar
  categoryColumns.forEach((cat) => {
    numericColumns.forEach((num) => {
      charts.push({
        chart: "bar",
        title: `${num} by ${cat}`,
        xAxis: cat,
        yAxis: num,
      });
    });
  });

  // Pie
  categoryColumns.forEach((cat) => {
    charts.push({
      chart: "pie",
      title: `${cat} Distribution`,
      category: cat,
    });
  });

  // Line
  dateColumns.forEach((date) => {
    numericColumns.forEach((num) => {
      charts.push({
        chart: "line",
        title: `${num} Trend`,
        xAxis: date,
        yAxis: num,
      });
    });
  });

  return charts;
}