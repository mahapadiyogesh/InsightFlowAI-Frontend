export function generateInsights(data, analysis, kpis) {
  if (!Array.isArray(data) || data.length === 0) {
    return [];
  }

  const insights = [];

  insights.push({
    title: "Dataset Summary",
    message: `Dataset contains ${analysis?.totalRows ?? 0} rows and ${analysis?.totalColumns ?? 0} columns.`,
  });

  insights.push({
    title: "Revenue",
    message: `Total Revenue: ${(kpis?.revenue ?? 0).toLocaleString()}`,
  });

  insights.push({
    title: "Profit",
    message: `Total Profit: ${(kpis?.profit ?? 0).toLocaleString()}`,
  });

  insights.push({
    title: "Records",
    message: `${kpis?.sales ?? 0} records analysed.`,
  });

  if ((analysis?.dateColumns?.length ?? 0) > 0) {
    insights.push({
      title: "Time Analysis",
      message: `Date column detected: ${analysis.dateColumns[0]}`,
    });
  }

  if ((analysis?.categoryColumns?.length ?? 0) > 0) {
    insights.push({
      title: "Categories",
      message: `${analysis.categoryColumns.length} categorical columns detected.`,
    });
  }

  if ((analysis?.numericColumns?.length ?? 0) > 0) {
    insights.push({
      title: "Numeric Data",
      message: `${analysis.numericColumns.length} numeric columns detected.`,
    });
  }

  return insights;
}