export function detectColumnType(columnName, values) {
  if (!Array.isArray(values) || values.length === 0) {
    return "unknown";
  }

  const cleaned = values.filter(
    (v) =>
      v !== null &&
      v !== undefined &&
      String(v).trim() !== ""
  );

  if (cleaned.length === 0) {
    return "unknown";
  }

  const name = columnName.toLowerCase();

  const dateKeywords = [
    "date",
    "dob",
    "birth",
    "joining",
    "invoice",
    "order",
    "ship",
    "delivery",
    "created",
    "updated",
  ];

  const isDateColumn = dateKeywords.some((k) =>
    name.includes(k)
  );

  let number = 0;
  let text = 0;
  let date = 0;
  let boolean = 0;

  cleaned.forEach((value) => {
    if (
      typeof value === "boolean" ||
      String(value).toLowerCase() === "true" ||
      String(value).toLowerCase() === "false"
    ) {
      boolean++;
      return;
    }

    if (value instanceof Date) {
      date++;
      return;
    }

    if (
      isDateColumn &&
      typeof value === "number" &&
      value > 25000 &&
      value < 60000
    ) {
      date++;
      return;
    }

    if (
      isDateColumn &&
      !isNaN(Date.parse(value))
    ) {
      date++;
      return;
    }

    if (!isNaN(Number(value))) {
      number++;
      return;
    }

    text++;
  });

  const total = cleaned.length;

  if (date / total > 0.7) return "date";

  if (number / total > 0.7) return "number";

  if (boolean / total > 0.7) return "boolean";

  const unique = [...new Set(cleaned)];

  if (unique.length <= 30) {
    return "category";
  }

  return "text";
}