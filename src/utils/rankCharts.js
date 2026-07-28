export function rankCharts(charts, analysis) {
  if (!Array.isArray(charts) || charts.length === 0) {
    return [];
  }

  return charts
    .map((item) => {
      let score = 0;

      switch (item.chart) {
        case "kpi":
          score = 100;
          break;

        case "bar":
          score = 95;
          break;

        case "line":
          score = 90;
          break;

        case "pie":
          score = 85;
          break;

        case "area":
          score = 80;
          break;

        case "table":
          score = 10;
          break;

        default:
          score = 0;
      }

      return {
        ...item,
        score,
      };
    })
    .sort((a, b) => b.score - a.score);
}