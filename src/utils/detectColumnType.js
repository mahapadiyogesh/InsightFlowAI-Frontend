export function detectColumnType(columnName) {
  const name = columnName.toLowerCase().trim();

  const rules = {
    revenue: [
      "revenue",
      "sales",
      "amount",
      "income",
      "net sales",
      "gross sales",
      "turnover",
      "value",
    ],

    profit: [
      "profit",
      "margin",
      "earnings",
      "net profit",
    ],

    customer: [
      "customer",
      "client",
      "buyer",
      "consumer",
      "customer name",
    ],

    product: [
      "product",
      "item",
      "product name",
      "sku",
    ],

    category: [
      "category",
      "segment",
      "department",
      "type",
    ],

    date: [
      "date",
      "order date",
      "invoice date",
      "purchase date",
      "created date",
    ],

    state: [
      "state",
      "province",
      "region",
    ],

    city: [
      "city",
      "town",
      "location",
    ],

    country: [
      "country",
      "nation",
    ],

    quantity: [
      "quantity",
      "qty",
      "units",
      "volume",
    ],

    payment: [
      "payment",
      "payment mode",
      "payment method",
    ],
  };

  for (const [type, keywords] of Object.entries(rules)) {
    if (
      keywords.some((keyword) => name.includes(keyword))
    ) {
      return type;
    }
  }

  return "unknown";
}