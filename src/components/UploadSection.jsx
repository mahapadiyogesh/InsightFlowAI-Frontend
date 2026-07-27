import { useContext, useRef } from "react";
import * as XLSX from "xlsx";
import { UploadCloud } from "lucide-react";
import { DataContext } from "../context/DataContext";
import { generateKPIs } from "../utils/generateKPIs";
function UploadSection() {
  const inputRef = useRef();

  const { setExcelData, setKpis } = useContext(DataContext);

  const handleUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);

      const workbook = XLSX.read(data, { type: "array" });

      const sheet = workbook.Sheets[workbook.SheetNames[0]];

      const json = XLSX.utils.sheet_to_json(sheet);

setExcelData(json);

// Generate KPI
const kpiData = generateKPIs(json);
setKpis(kpiData);

alert(`Successfully Loaded ${json.length} Records`);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-2xl font-bold mb-6">
        Upload Excel File
      </h2>

      <div
        onClick={() => inputRef.current.click()}
        className="border-2 border-dashed border-cyan-500 rounded-2xl p-12 text-center cursor-pointer hover:bg-cyan-50 transition"
      >
        <UploadCloud
          size={70}
          className="mx-auto text-cyan-600"
        />

        <h3 className="mt-5 text-xl font-semibold">
          Click to Upload Excel / CSV
        </h3>

        <p className="text-gray-500 mt-2">
          Supports .xlsx, .xls and .csv
        </p>

        <input
          ref={inputRef}
          type="file"
          accept=".xlsx,.xls,.csv"
          className="hidden"
          onChange={handleUpload}
        />
      </div>
    </div>
  );
}

export default UploadSection;