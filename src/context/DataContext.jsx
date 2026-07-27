import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [excelData, setExcelData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [kpis, setKpis] = useState({});
  const [charts, setCharts] = useState([]);

  return (
    <DataContext.Provider
      value={{
        excelData,
        setExcelData,
        filteredData,
        setFilteredData,
        kpis,
        setKpis,
        charts,
        setCharts,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};