import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function BarChartComponent() {
  const { excelData } = useContext(DataContext);

  if (!excelData.length) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-6 mt-8 text-center">
        <h2 className="text-xl font-semibold text-gray-600">
          No Chart Data
        </h2>

        <p className="text-gray-400 mt-2">
          Upload an Excel file to generate charts.
        </p>
      </div>
    );
  }

  const columns = Object.keys(excelData[0]);

  // First text column
  const labelKey =
    columns.find((c) => typeof excelData[0][c] === "string") || columns[0];

  // First numeric column
  const valueKey =
    columns.find((c) => typeof excelData[0][c] === "number") || columns[1];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6">
        Sales Overview
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={excelData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey={labelKey} />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey={valueKey}
            fill="#06b6d4"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartComponent;