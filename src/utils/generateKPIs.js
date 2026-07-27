export function generateKPIs(data) {
  if (!data || data.length === 0) {
    return {
      revenue: 0,
      sales: 0,
      profit: 0,
      customers: 0,
    };
  }

  let revenue = 0;
  let profit = 0;

  data.forEach((row) => {
    revenue += Number(
      row.Revenue ||
      row.Sales ||
      row.Amount ||
      0
    );

    profit += Number(
      row.Profit || 0
    );
  });

  return {
    revenue,
    sales: data.length,
    profit,
    customers: data.length,
  };
}