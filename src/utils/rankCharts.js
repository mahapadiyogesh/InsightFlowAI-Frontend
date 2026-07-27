export function rankCharts(charts, analysis) {
  if (!charts || charts.length === 0) {
    return [];
  }

  const rankedCharts = charts.map((chart) => {
    let score = 0;

    switch (chart.type) {
      case "line":
        score =
          analysis.dateColumns.length > 0 &&
          analysis.numericColumns.length > 0
            ? 100
            : 0;
        break;

      case "bar":
        score =
          analysis.textColumns.length > 0 &&
          analysis.numericColumns.length > 0
            ? 95
            : 0;
        break;

      case "pie":
        score =
          analysis.textColumns.length > 0 &&
          analysis.numericColumns.length > 0
            ? 85
            : 0;
        break;

      case "area":
        score =
          analysis.dateColumns.length > 0 &&
          analysis.numericColumns.length > 0
            ? 80
            : 0;
        break;

      case "scatter":
        score =
          analysis.numericColumns.length >= 2
            ? 75
            : 0;
        break;

      default:
        score = 50;
    }

    return {
      ...chart,
      score,
    };
  });

  rankedCharts.sort((a, b) => b.score - a.score);

  return rankedCharts.slice(0, 6);
}