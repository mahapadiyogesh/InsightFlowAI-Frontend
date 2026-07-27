export function generateInsights(data, analysis, kpis) {
  if (!data || data.length === 0) {
    return [];
  }

  const insights = [];

  insights.push({
    title: "Dataset Summary",
    message: `Dataset contains ${analysis.totalRows} rows and ${analysis.totalColumns} columns.`,
  });

  insights.push({
    title: "Revenue",
    message: `Total Revenue: ${kpis.revenue.toLocaleString()}`,
  });

  insights.push({
    title: "Profit",
    message: `Total Profit: ${kpis.profit.toLocaleString()}`,
  });

  insights.push({
    title: "Records",
    message: `${kpis.sales} records analysed.`,
  });

  if (analysis.dateColumns.length > 0) {
    insights.push({
      title: "Time Analysis",
      message: `Date column detected: ${analysis.dateColumns[0]}`,
    });
  }

  return insights;
}