import { analyzeDataset } from "./analyzeDataset";
import { generateKPIs } from "./generateKPIs";
import { generateFilters } from "./generateFilters";
import { generateCharts } from "./generateCharts";
import { rankCharts } from "./rankCharts";

export function dashboardGenerator(data) {
  if (!data || data.length === 0) {
    return null;
  }

  // Step 1
  const analysis = analyzeDataset(data);

  // Step 2
  const kpis = generateKPIs(data);

  // Step 3
  const filters = generateFilters(data, analysis);

  // Step 4
  const charts = generateCharts(data, analysis);

  // Step 5
  const rankedCharts = rankCharts(charts, analysis);

  return {
    dataset: {
      rows: analysis.totalRows,
      columns: analysis.totalColumns,
    },

    analysis,

    kpis,

    filters,

    charts: rankedCharts,

    layout: {
      header: true,

      kpis: true,

      filters: true,

      charts: true,

      insights: true,

      table: true,
    },
  };
}