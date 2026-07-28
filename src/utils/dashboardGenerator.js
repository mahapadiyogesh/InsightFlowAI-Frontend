import { analyzeDataset } from "./analyzeDataset";
import { generateKPIs } from "./generateKPIs";
import { generateFilters } from "./generateFilters";
import { generateCharts } from "./generateCharts";
import { rankCharts } from "./rankCharts";

export function dashboardGenerator(data) {
  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }

  try {
    // ==========================
    // DATASET ANALYSIS
    // ==========================
    const analysis = analyzeDataset(data);

    console.log("===== ANALYSIS =====");
    console.log(analysis);

    if (!analysis) {
      throw new Error("Analysis generation failed.");
    }

    // ==========================
    // KPIs
    // ==========================
    const kpis = generateKPIs(data);

    console.log("===== KPIS =====");
    console.log(kpis);

    // ==========================
    // FILTERS
    // ==========================
    const filters = generateFilters(data, analysis);

    console.log("===== FILTERS =====");
    console.log(filters);

    // ==========================
    // CHARTS
    // ==========================
    const charts = generateCharts(data, analysis);

    console.log("===== CHARTS =====");
    console.log(charts);

    // ==========================
    // RANK CHARTS
    // ==========================
    const rankedCharts = rankCharts(charts, analysis);

    console.log("===== RANKED CHARTS =====");
    console.log(rankedCharts);

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
  } catch (error) {
    console.error("Dashboard Generator Error:", error);

    return {
      dataset: {
        rows: 0,
        columns: 0,
      },
      analysis: null,
      kpis: {},
      filters: [],
      charts: [],
      layout: {},
    };
  }
}